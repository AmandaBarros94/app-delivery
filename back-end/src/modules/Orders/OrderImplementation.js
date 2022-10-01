const SaleModel = require('../../database/models/SaleModel');
const UsersModel = require('../../database/models/UserModel');
const ProductModel = require('../../database/models/ProductModel');
const SalesProductModel = require('../../database/models/SaleProductModel');
const { sequelize } = require('../../database/models');
const CustomError = require('../../utils/CustomError');

class SaleImplementation {
    constructor(
        sequelizeSaleModel = SaleModel,
        sequelizeUserModel = UsersModel,
        sequelizeProductModel = ProductModel,
        sequelizeSaleProductModel = SalesProductModel,
    ) {
        this.sequelizeSaleModel = sequelizeSaleModel;
        this.sequelizeUserModel = sequelizeUserModel;
        this.sequelizeProductModel = sequelizeProductModel;
        this.sequelizeSaleProductModel = sequelizeSaleProductModel;
    }

async createSale(saleInfos) {
    const { arrayOfProducts, sellerId, userId, deliveryAddress, deliveryNumber,
        totalPrice, status } = saleInfos;
    
    try {
        const saleData = await sequelize.transaction(async (transaction) => {
            const { id: saleId } = await this.sequelizeSaleModel
                .create(
                    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status },
                    { transaction },
                );

          await Promise.all(arrayOfProducts.map(async ({ id, quantity }) => {
                await this.sequelizeSaleProductModel
                .create({ saleId, productId: id, quantity }, { transaction });
            }));
            
            return { id: saleId, message: 'Your purchase was successfull' };
        });
        return saleData;
    } catch (err) { throw new Error(); }
}

async getAllOrdersByCustomer(customerId) {
    const productsList = await this.sequelizeUserModel.findAll({ where: { id: customerId },
        include: [
            { model: this.sequelizeSaleModel,
                attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
                as: 'purchases',                   
            },
        ],
    });
    if (!productsList) throw new CustomError(404, 'User not found');
    const productsBought = productsList[0].purchases.map((purchase) => {
            const newPurchase = purchase;
            newPurchase.totalPrice = purchase.totalPrice.replace('.', ',');
            return newPurchase;
        });
    return productsBought;
}

async getAllSalesBySeller(sellerId) {
    const productsList = await this.sequelizeUserModel.findOne({ where: { id: sellerId },
        include: [
            { model: this.sequelizeSaleModel,
                attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
                as: 'sales',                   
            },
        ],
    });
    if (!productsList) throw new CustomError(404, 'User not found');
    const productsSold = productsList.sales.map((sale) => {
            const newSale = sale;
            newSale.totalPrice = sale.totalPrice.replace('.', ',');
            return newSale;
        });

    return productsSold;
}

async getSaleById(saleId) {
    const sale = await this.sequelizeSaleModel.findOne({ 
        where: { id: saleId },
        include: [
            { 
                model: this.sequelizeProductModel,
                through: { attributes: ['quantity'] },
                as: 'salesProducts',
            },
        ],
     });

     if (!sale) throw new CustomError(404, 'Sale not found');

    const { name } = await this.sequelizeUserModel.findByPk(sale.sellerId);

    sale.sellerName = name;

    return sale;
}

async updateSaleStatus(saleInformation) {
    const { id, status } = saleInformation;
    const sale = await this.sequelizeSaleModel.update({ status }, { where: { id } });
    return sale;
}

async findUserAndSellerIds(saleInfos) {
    const { userName, sellerName } = saleInfos;

    const user = await this
        .sequelizeUserModel.findOne({ where: { name: userName } });

    const seller = await this
        .sequelizeUserModel.findOne({ where: { name: sellerName } });

    if (!user || !seller) {
        throw new CustomError(404, 'User or seller not found');
    }

    const { id: userId } = user;
    const { id: sellerId } = seller;

    return { userId, sellerId };
}
}

module.exports = SaleImplementation;
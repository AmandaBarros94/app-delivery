const { SaleModel } = require('../../database/models/SalesModel');
const { UsersModel } = require('../../database/models/UsersModel');
const { ProductModel } = require('../../database/models/ProductModel');
const { SalesProductModel } = require('../../database/models/SalesProductsModel');
const { sequelize } = require('../../database/models');
const CustomError = require('../../utils/CustomError');

export default class SaleImplementation {
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

    async createSale(sale) {
        const { arrayOfProducts, sellerId, userId, deliveryAddress, deliveryNumber,
            totalPrice, status } = sale;
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
        } catch (error) { throw new CustomError(500, error.message); }
}

async getAllSalesByCustomer(customerId) {
    const productsList = await this.sequelizeUserModel.findOne({ where: { id: customerId },
        include: [
            { model: this.sequelizeSaleModel,
                attributes: { exclude: ['deliveryAddress', 'deliveryNumber'] },
                as: 'purchases',                   
            },
        ],
    });
    if (!productsList) throw new CustomError(404, 'User not found');
    const productsBought = productsList.purchases.map((purchase) => {
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
    const sale = await this.sequelizeSaleModel.findOne({ where: { id: saleId },
        include: [
            { model: this.sequelizeUserModel, as: 'customer' },
            { model: this.sequelizeUserModel, as: 'seller' },
            { model: this.sequelizeProductModel, as: 'products' },
        ],
    });
    const newSale = sale;
    newSale.totalPrice = sale.totalPrice.replace('.', ',');
    return newSale;
}

async updateSaleStatus(saleInformation) {
    const { id, status } = saleInformation;
    const sale = await this.sequelizeSaleModel.update({ status }, { where: { id } });
    return sale;
}
}
const ProductsModel = require('../../database/models/ProductModel');
const SalesModel = require('../../database/models/SaleModel');
const SalesProductModel = require('../../database/models/SaleProductModel');
const UsersModel = require('../../database/models/UserModel');
const formatImageUrl = require('./helpers/formatImage');
const formatProductDetails = require('./helpers/formatProductDetails');

class ProductImplementation {
    constructor(
        ProductModel = ProductsModel,
        UserModel = UsersModel,
        SaleModel = SalesModel,
        SaleProductModel = SalesProductModel,  
    ) {
        this.ProductModel = ProductModel;
        this.UserModel = UserModel;
        this.SaleModel = SaleModel;
        this.SaleProductModel = SaleProductModel;
    }

    async getAllProducts() {
        const products = await this.ProductModel.findAll();

           return products.map((product) => {
            const newProduct = product;
            newProduct.price = product.price.replace('.', ',');
            newProduct.urlImage = formatImageUrl(product.urlImage);
            return newProduct;
           });
    }

    async getProductPurchasedByCustomer(id) {
        const products = await this.sequelizeUserModel.findOne({ where: { id },
            include: [
                { model: this.sequelizeSaleModel,
                    as: 'purchases',
                    attributes: ['id'],
                    include: [
                        { model: this.sequelizeProductModel,
                            as: 'salesProducts',
                            through: { attributes: ['quantity'] },
                        },
                    ],
                },
            ],
        });

        const productsBought = products.purchases.map((purchase) => formatProductDetails(purchase));

        return productsBought;
    }

    async getProductsSoldBySeller(id) {
        const products = await this.sequelizeUserModel.findOne({ where: { id },
            include: [
                { model: this.sequelizeSaleModel,
                    as: 'sales',
                    attributes: ['id'],
                    include: [
                        { model: this.sequelizeProductModel,
                            as: 'salesProducts',
                            through: { attributes: ['quantity'] },
                        },
                    ],

                },
            ],
        });

        const productsSold = products.sales.map((sale) => formatProductDetails(sale));

        return productsSold;
    }
}

module.exports = ProductImplementation;
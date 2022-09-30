const { StatusCodes } = require('http-status-codes');
const ProductService = require('./ProductService');

class ProductController {
    constructor(productService = new ProductService()) {
        this.productService = productService;
    }
    
    async getAllProducts(req, res) {
        const response = await this.productService.getAllProducts();

        return res.status(StatusCodes.OK).json(response);
    }
    
    async getProductPurchasedByCustomer(req, res) {
        const { id } = req.params;

        const response = await this.productService.getProductPurchasedByCustomer(id);

        return res.status(StatusCodes.OK).json(response);
    }
    
    async getProductsSoldBySeller(req, res) {
        const { id } = req.params;

        const response = await this.productService.getProductsSoldBySeller(id);

        return res.status(StatusCodes.OK).json(response);
    }
}

module.exports = ProductController;
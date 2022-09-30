const ProductImplementation = require('./ProductImplementation');

class ProductService {
    constructor(productImplementation = new ProductImplementation()) {
        this.productImplementation = productImplementation;
    }
    
    async getAllProducts() {
        const products = await this.productImplementation.getAllProducts();
    
        return products;
    }
    
    async getProductPurchasedByCustomer(id) {
        const products = await this.productImplementation.getProductPurchasedByCustomer(id);
    
        return products;
    }
    
    async getProductsSoldBySeller(id) {
        const products = await this.productImplementation.getProductsSoldBySeller(id);
    
        return products;
    }
}

module.exports = ProductService;
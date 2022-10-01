const { StatusCodes } = require('http-status-codes');
const OrderService = require('./OrderService');

class OrderController {
    constructor(orderService = new OrderService()) {
        this.orderService = orderService;
    }
    
    async createOrder(req, res) {
        const order = req.body;
        console.log(order);
        const response = await this.orderService.createOrder(order);
    
        return res.status(StatusCodes.CREATED).json(response);
    }
    
    async getAllOrdersByCustomer(req, res) {
        const { id } = req.body;
    
        const response = await this.orderService.getAllOrdersByCustomer(id);
    
        return res.status(StatusCodes.OK).json(response);
    }
    
    async getAllOrdersBySeller(req, res) {
        const { id } = req.user;
    
        const response = await this.orderService.getAllOrdersBySeller(id);
    
        return res.status(StatusCodes.OK).json(response);
    }
    
    async updateOrder(req, res) {
        const { id } = req.params;
        const { status } = req.body;
    
        const response = await this.orderService.updateOrder({ id, status });
    
        return res.status(StatusCodes.OK).json(response);
    }

    async getSaleById(req, res) {
        const { id } = req.params;
        console.log(id);
        const response = await this.orderService.getSaleById(id);
        console.log(response);
        return res.status(StatusCodes.OK).json(response);
    }
}

module.exports = OrderController;
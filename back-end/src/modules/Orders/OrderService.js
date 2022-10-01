const OrderImplementation = require('./OrderImplementation');
const CustomError = require('../../utils/CustomError');

class OrderService {
  constructor(orderImplementation = new OrderImplementation()) {
    this.orderImplementation = orderImplementation;
  }

  async createOrder(saleInfos) {
    const { userId, sellerId } = await this.orderImplementation.findUserAndSellerIds(saleInfos);

    const formattedSale = saleInfos;

    formattedSale.userId = userId;
    formattedSale.sellerId = sellerId;
    formattedSale.status = 'Pendente';

    const saleCreationReturn = await this.orderImplementation.createSale(formattedSale);

    return saleCreationReturn;
}

  async getAllOrdersByCustomer(customerId) {
    const response = await this.orderImplementation.getAllOrdersByCustomer(customerId);

    return response;
  }

  async getAllOrdersBySeller(sellerId) {
    const response = await this.orderImplementation.getAllOrdersBySeller(sellerId);
    
    return response;
  }

  async updateOrder(orderInformations) {
    const order = await this.orderImplementation.getSaleById(orderInformations.id);
    if (!order) throw new CustomError(404, 'Order not found');
    const response = await this.orderImplementation.updateOrder(orderInformations);
    return response;
  }
}

module.exports = OrderService;
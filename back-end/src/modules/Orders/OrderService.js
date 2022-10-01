const OrderImplementation = require('./OrderImplementation');
const CustomError = require('../../utils/CustomError');
const { formatProductDetails } = require('./helpers/formatProductDetails');
const { formatDate } = require('./helpers/formatDate');

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

    const dataFormated = response.map((sale) => {
      const newSale = { ...sale };
      newSale.dataValues.saleDate = formatDate(sale.saleDate);
      return newSale;
    });
    
    return dataFormated;
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

  async getSaleById(saleId) {
    const foundSale = await this.orderImplementation.getSaleById(saleId);

    const newSale = {
      id: foundSale.id,
      totalPrice: foundSale.totalPrice.replace('.', ','),
      sellerName: foundSale.sellerName,
      saleDate: formatDate(foundSale.saleDate),
      status: foundSale.status,
      productsList: foundSale.salesProducts.map((product) => formatProductDetails(product)),
  };
    return newSale;
  }
}

module.exports = OrderService;
import api from '..';
import mountConfig from './getTokenFromStorage';

const getOrderById = async (id) => api
  .get(`/orders/order/${id}`, mountConfig());

export default getOrderById;

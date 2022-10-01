import api from '..';
import mountConfig from './getTokenFromStorage';

const getAllOrdersByClient = async (id) => api
  .get(`/orders/customer/${id}`, mountConfig());

export default getAllOrdersByClient;

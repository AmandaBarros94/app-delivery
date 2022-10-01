import api from '..';
import mountConfig from './getTokenFromStorage';

const getOrderById = async (id) => api
  .get(`/orders/${id}`, mountConfig());

export default getOrderById;

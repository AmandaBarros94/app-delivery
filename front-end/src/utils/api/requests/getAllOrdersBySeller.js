import api from '..';
import mountConfig from './getTokenFromStorage';

const getAllOrdersBySeller = async (id) => api
  .get(`/orders/seller/${id}`, mountConfig());

export default getAllOrdersBySeller;

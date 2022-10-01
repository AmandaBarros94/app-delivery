import api from '..';
import mountConfig from './getTokenFromStorage';

const updateOrderStatusById = async (status, id) => api
  .patch(`/orders/${id}`, { status }, mountConfig());

export default updateOrderStatusById;

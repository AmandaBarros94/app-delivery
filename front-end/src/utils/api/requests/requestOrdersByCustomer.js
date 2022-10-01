import api from '..';
import mountConfig from './getTokenFromStorage';

const requestOrdersByCustomer = async (endpoint) => {
  const { data } = await api.get(endpoint, mountConfig());
  return data;
};

export default requestOrdersByCustomer;

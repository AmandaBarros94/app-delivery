import api from '..';

const requestOrdersByCustomer = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default requestOrdersByCustomer;

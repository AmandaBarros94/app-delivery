import api from '..';

const requestOrders = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default requestOrders;

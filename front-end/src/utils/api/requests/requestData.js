import api from '..';

const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default requestData;

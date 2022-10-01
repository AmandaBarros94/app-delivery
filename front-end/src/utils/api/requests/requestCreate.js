import api from '..';

const requestCreate = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default requestCreate;

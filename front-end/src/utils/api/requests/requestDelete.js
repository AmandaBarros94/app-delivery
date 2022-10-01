import api from '..';

const requestDelete = async (endpoint, body) => {
  await api.delete(endpoint, { data: { body } });
};

export default requestDelete;

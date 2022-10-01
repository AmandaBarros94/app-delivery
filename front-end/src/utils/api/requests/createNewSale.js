import api from '..';
import mountConfig from './getTokenFromStorage';

const createNewSale = async (newSale) => api.post(
  '/orders',
  newSale,
  mountConfig(),
);

export default createNewSale;

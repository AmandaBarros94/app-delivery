import api from '..';

const createNewSale = async (newSale) => api.post(
  '/orders',
  newSale,
);

export default createNewSale;

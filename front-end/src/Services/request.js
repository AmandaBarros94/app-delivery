import axios from 'axios';

const url = process.env.REACT_APP_LOCALHOST || 'http://localhost:3001';

const api = axios.create({
  baseURL: `${url}`,
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (UserInfos) => {
  const { data } = await api.post('/users/login', { ...UserInfos });
  return data;
};

export const setToken = (token) => {
  api.defaults.headers.Authorization = token;
};

export const requestUserByEmail = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const postCreate = async (body) => {
  const { data } = await api.post('/users/register', { ...body });
  return data;
};

export const getUserSallers = async () => {
  const { data } = await api.get('/users/sellers');
  return data;
};

export const salesRequest = async (orderInfo, token) => {
  const {
    deliveryAddress,
    sellerId,
    totalPrice,
    deliveryNumber,
    userId,
    order,
  } = orderInfo;
  const salesApi = axios.create({
    baseURL: `${url}`,
    headers: { authorization: token },
  });
  const { data } = await salesApi.post('/sales', {
    deliveryAddress,
    sellerId,
    totalPrice,
    deliveryNumber,
    userId,
    order,
  });
  return data;
};

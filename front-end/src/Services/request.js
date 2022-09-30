import axios from 'axios';
import { getToken } from '../utils/authorization';

const url = process.env.REACT_APP_LOCALHOST || 'http://localhost:3001';

const api = axios.create({
  baseURL: `${url}`,
});

export async function getAPI(endpoint, isProtected) {
  const requestConfig = {};

  if (isProtected) {
    const token = getToken();
    requestConfig.headers = { authorization: token };
  }

  const { data } = await axios.get(`${url}/${endpoint}`, requestConfig);

  return data;
}

export const postAPI = async (endpoint, userInfo, isProtected) => {
  const requestConfig = {};

  if (isProtected) {
    const token = getToken();
    requestConfig.headers = { authorization: token };
  }

  try {
    const { data } = await axios.post(`${url}/${endpoint}`, userInfo, requestConfig);

    return data;
  } catch (error) {
    const errorStatus = error.response?.status;
    if (errorStatus === null) {
      throw error;
    }

    return { errorCode: errorStatus };
  }
};

export async function deleteAPI(endpoint, id, isProtected) {
  const requestConfig = {};

  if (isProtected) {
    const token = getToken();
    requestConfig.headers = { authorization: token };
  }

  const { data } = await axios.delete(`${url}/${endpoint}/${id}`, requestConfig);

  return data;
}

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (UserInfos) => {
  const { data } = await api.post('/login', { ...UserInfos });
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
  console.log('oi');
  const { data } = await api.post('/register', { ...body });
  console.log('oi', data);
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

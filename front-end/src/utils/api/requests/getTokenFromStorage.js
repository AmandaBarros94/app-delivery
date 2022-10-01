import getStorage from '../../handleStorage/getStorage';

const mountConfig = () => {
  const getUserToken = getStorage('user').token;
  return {
    headers: {
      authorization: getUserToken,
    },
  };
};

export default mountConfig;

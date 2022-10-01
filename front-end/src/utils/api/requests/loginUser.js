import api from '..';

const loginUser = async (userInfos) => api.post('/users/login', {
  ...userInfos,
});

export default loginUser;

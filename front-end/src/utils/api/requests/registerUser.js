import api from '..';

const registerCommonUser = async (userInfos) => api.post('/users/register', {
  ...userInfos,
});

export default registerCommonUser;

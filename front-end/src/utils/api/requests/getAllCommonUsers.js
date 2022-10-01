import api from '..';

const getAllCommonUsers = async () => api.get('/users');

export default getAllCommonUsers;

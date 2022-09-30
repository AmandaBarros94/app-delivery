const axios = require('axios').default;

function getAPI(source) {
  return axios
    .get(`http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}/${source}`)
    .then((response) => response.data);
}

module.exports = {
  getAPI,
};

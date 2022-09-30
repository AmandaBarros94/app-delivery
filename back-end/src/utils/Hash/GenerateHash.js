const md5 = require('md5');

const generateHash = (data) => md5(data);

module.exports = generateHash;
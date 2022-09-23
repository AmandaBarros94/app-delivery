const md5 = require('md5');

const generateHash = (data) => {
  const { password } = data;

  const hashedData = data;

  const userPassword = md5(password);

  hashedData.password = userPassword;
  
  return hashedData;
};

module.exports = generateHash;
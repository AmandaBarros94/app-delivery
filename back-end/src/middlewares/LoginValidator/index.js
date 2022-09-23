const loginSchema = require('./loginSchema');
const LoginValidation = require('./loginValidation');

const loginValidation = new LoginValidation(loginSchema);

module.exports = loginValidation;
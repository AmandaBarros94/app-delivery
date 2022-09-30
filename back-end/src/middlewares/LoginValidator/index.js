const loginSchema = require('./loginSchema');
const LoginValidation = require('./LoginValidation');

const loginValidation = new LoginValidation(loginSchema);

module.exports = loginValidation;
const RegisterSchema = require('./RegisterSchema');
const RegisterValidation = require('./RegisterValidator');

const registerValidation = new RegisterValidation(RegisterSchema);

module.exports = registerValidation;
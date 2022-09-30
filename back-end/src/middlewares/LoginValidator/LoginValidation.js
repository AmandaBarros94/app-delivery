const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/CustomError');
const loginSchema = require('./loginSchema');

class LoginValidation {
    constructor(schema = loginSchema) {
        this.schema = schema;
        this.validateLogin = this.validateLogin.bind(this);
    }

    validateLogin(req, _res, next) {
        const { error } = this.schema.safeParse(req.body);

        if (error) {
            const { issues: [{ message }] } = error;

            throw new CustomError(StatusCodes.BAD_REQUEST, message);
        }

        next();
    }
}

module.exports = LoginValidation;
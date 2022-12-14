const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/CustomError');
const registerSchema = require('./RegisterSchema');

class RegisterValidation {
    constructor(schema = registerSchema) {
        this.schema = schema;
        this.validateRegister = this.validateRegister.bind(this);
    }

    validateRegister(req, _res, next) {
        const requestInformations = req.body;
        const { error } = this.schema.safeParse(requestInformations);

        if (error) {
            const { issues: [{ message }] } = error;

            throw new CustomError(StatusCodes.BAD_REQUEST, message);
        }

        next();
    }
}

module.exports = RegisterValidation;
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/CustomError');
const registerSchema = require('./AdminSchema');

class AdminValidator {
    constructor(schema = registerSchema) {
        this.schema = schema;
        this.validateRegister = this.validateRegister.bind(this);
    }

    static authenticateAdm(req, _res, next) {
        const { role } = req.user;

        if (role !== 'administrator') {
            next(new CustomError(
                StatusCodes.UNAUTHORIZED,
                'user must be administrator to create a user',
            ));
        }

        next();
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

module.exports = AdminValidator;
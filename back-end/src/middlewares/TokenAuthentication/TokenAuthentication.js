const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/CustomError');
const Token = require('../../utils/Token');

class TokenAuthentication {
    constructor(badRequest = StatusCodes.BAD_REQUEST, notFound = StatusCodes.NOT_FOUND) {
        this.badRequest = badRequest;
        this.notFound = notFound;
      }

    async verifyToken(req, _res, next) {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new CustomError(this.notFound, 'Token not found');
        }
    
        const { data } = Token.verify(authorization);
        
        if (!data) {
            throw new CustomError(this.badRequest, 'Invalid or expired token');
        }
        
        req.user = data;
    
        next();
    }
}

module.exports = TokenAuthentication;
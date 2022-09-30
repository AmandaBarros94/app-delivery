const { StatusCodes } = require('http-status-codes');
const UserService = require('./UserService');

class UserController {
    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    async loginUser(req, res) {
        const loginInformations = req.body;
  
        const response = await this.userService.loginUser(loginInformations);
        
        return res.status(StatusCodes.OK).json(response);
    }

    async registerUser(req, res) {
        const userInformations = req.body;

        const response = await this.userService.registerUser(userInformations);

        return res.status(StatusCodes.CREATED).json(response);
    }

    async getAllUsers(_req, res) {
        const response = await this.userService.getAllUsers();

        return res.status(StatusCodes.OK).json(response);
    }

    async deleteUser(req, res) {
        const { id } = req.params;

        await this.userService.deleteUser(id);

        return res.status(StatusCodes.OK).end();
    }
}

module.exports = UserController;
const { StatusCodes } = require('http-status-codes');
const { ControllerFactory } = require('../factory');
const { UserService } = require('../services');

module.exports = class UserController extends ControllerFactory {
  constructor(service = new UserService()) {
    super(service);
    this.login = this.login.bind(this);
    this.getCommonUsers = this.getCommonUsers.bind(this);
  }

  async login(req, res) {
    const response = await this.service.login(req.body);
    
    return res.status(StatusCodes.OK).json(response);
  }

  async getCommonUsers(_req, res) {
    const response = await this.service.getCommonUsers();

    res.status(StatusCodes.OK).json(response);
  }
};

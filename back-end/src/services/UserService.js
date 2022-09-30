const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { ServiceFactory } = require('../factory');
const { UserModel } = require('../database/models');
const authenticator = require('../utils/Token');
const generateHash = require('../utils/Hash/GenerateHash');
const CustomError = require('../utils/CustomError');

module.exports = class UserService extends ServiceFactory {
  constructor(model = UserModel) {
    super(model);
  }

  async login(credentials) {
    const { password } = credentials;
    const hashedPassword = generateHash(password);

    const foundUser = await this.model.findOne({
      where: { ...credentials, password: hashedPassword },
      attributes: ['name', 'email', 'role'],
    });

    if (!foundUser) {
      throw new CustomError(StatusCodes.NOT_FOUND, 'User not found');
    }
    
    const token = authenticator.generate(foundUser);

    return {
        ...foundUser,
        token,
    };
  }

  async create(userInfo) {
    const { name, email, password } = userInfo;
    const hashedPassword = generateHash(password);

    const existentUser = await this.model.findOne({
      where: { [Op.or]: [{ email }, { name }] },
    });

    if (existentUser != null) {
      throw new CustomError(
        StatusCodes.CONFLICT,
        'there already is a user with this name or email',
      );
    }
    
    const createdUser = await this.model.create({ ...userInfo, password: hashedPassword });
    delete createdUser.dataValues.password;
  
    const token = authenticator.generate(createdUser);

    return {
      ...createdUser.dataValues,
      token,
    };
  }

  getCommonUsers() {
      return this.model.findAll({ where: { role: { [Op.not]: 'administrator' } } });
  }
};

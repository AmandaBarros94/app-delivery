const { Op } = require('sequelize');
const UserModel = require('../../database/models/UserModel');
const CustomError = require('../../utils/CustomError');

class UserImplementation {
    constructor(userModel = UserModel) {
        this.userModel = userModel;
    }

    async loginUser(loginInformations) {
        const { email, password } = loginInformations;
       
        const foundUser = await this.userModel.findOne({ where: { email, password } });
        
        return foundUser;
    }

    async registerUser(userInformations) {
        const { name, email } = userInformations;

        const foundUser = await this.userModel.findOne({
             where: { [Op.or]: [{ name }, { email }] } });
        
        if (foundUser) {
            throw new CustomError(409, 'User already registered');
        }
       
        const createdUser = await this.userModel.create(userInformations);
       
        return createdUser;
    }

    async getAllUsers() {
        const users = await this.userModel.findAll();

        return users;
    }

    async getUserById(id) {
        const foundUser = await this.userModel.findByPk(id);

        return foundUser;
    }

    async deleteUser(id) {
       await this.userModel.destroy({ where: { id } });
    }
}

module.exports = UserImplementation;
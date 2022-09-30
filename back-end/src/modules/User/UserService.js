const UserImplementation = require('./UserImplementation');
const CustomError = require('../../utils/CustomError');
const Token = require('../../utils/Token');
const generateHash = require('../../utils/Hash/GenerateHash');

class UserService {
  constructor(userImplementation = new UserImplementation()) {
    this.userImplementation = userImplementation;
  }

  async loginUser(loginInformations) {
    const hashedUser = generateHash(loginInformations);
   console.log(hashedUser);
    const foundUser = await this.userImplementation.loginUser(hashedUser);
    console.log(foundUser);
    if (!foundUser) {
      throw new CustomError(404, 'User not found');
    }

    const { name, email, role, id } = foundUser;

        const token = Token.generate(hashedUser);

        return {
            id,
            name,
            email,
            role,
            token,
        };
  }

  async registerUser(userInformations) {
    const hashedUser = generateHash(userInformations);
    
    const createdUser = await this.userImplementation.registerUser(hashedUser);
   console.log(createdUser);
    const token = Token.generate(hashedUser);

    const { name, email, role, id } = createdUser;

    return {
        id,
        name,
        email,
        role,
        token,
    };
  }

  async getAllUsers() {
    const users = await this.userImplementation.getAllUsers();

    return users;
  }

  async getUserById(id) {
    const foundUser = await this.userImplementation.getUserById(id);

    return foundUser;
  }

  async deleteUser(id) {
    const deletedUser = await this.userImplementation.deleteUser(id);

    return deletedUser;
  }
}

module.exports = UserService;
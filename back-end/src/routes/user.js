const { Router } = require('express');
const { UserController } = require('../controllers');
const loginValidator = require('../middlewares/LoginValidator');
const registerValidation = require('../middlewares/ComonRegisterValidator');

const userController = new UserController();

const userRoutes = Router();

userRoutes
  .route('/login')
    .post(loginValidator.validateLogin, userController.login);

userRoutes
  .route('/register')
    .post(registerValidation.validateRegister, userController.create);

module.exports = userRoutes;

const express = require('express');
const UserController = require('./UserController');
const LoginValidator = require('../../middlewares/LoginValidator');
const RegisterValidation = require('../../middlewares/ComonRegisterValidator');
// const TokenAuthentication = require('../../middlewares/TokenAuthentication');

const userRoutes = express.Router();

const userController = new UserController();

userRoutes
.get('/', (req, res) => userController.getAllUsers(req, res))

.post(
    '/login',
    (req, res, next) => LoginValidator.validateLogin(req, res, next),
    (req, res) => userController.loginUser(req, res),
  )

.post('/register',
 (req, res, next) => RegisterValidation.validateRegister(req, res, next),
  (req, res) => userController.registerUser(req, res));

module.exports = userRoutes;
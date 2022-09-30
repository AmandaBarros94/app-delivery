const { Router } = require('express');
const { UserController } = require('../controllers');
const { AdminValidator } = require('../middlewares');
const userAuthenticator = require('../middlewares/TokenAuthentication');

const adminValidator = new AdminValidator();
const userController = new UserController();

const adminRoutes = Router();

adminRoutes.use(userAuthenticator.verifyToken);
adminRoutes.use(AdminValidator.authenticateAdm);

adminRoutes
  .route('/admin/users')
    .get(userController.getCommonUsers)
    .post(adminValidator.validateRegister, userController.create);

adminRoutes
  .route('/admin/users/:id')
    .delete(userController.delete);

module.exports = adminRoutes;

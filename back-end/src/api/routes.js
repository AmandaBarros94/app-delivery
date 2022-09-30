const express = require('express');
const userRoutes = require('../modules/User/routes');
const orderRoutes = require('../modules/Orders/routes');

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/orders', orderRoutes);

module.exports = routes;
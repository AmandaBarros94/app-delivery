const express = require('express');
const userRoutes = require('../modules/User/routes');
const orderRoutes = require('../modules/Orders/routes');
const productRoutes = require('../modules/Products/routes');

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/orders', orderRoutes);
routes.use('/products', productRoutes);

module.exports = routes;
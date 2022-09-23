const express = require('express');
const userRoutes = require('../modules/User/routes');

const routes = express.Router();

routes.use('/users', userRoutes);

module.exports = routes;
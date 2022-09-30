const express = require('express');
const OrderController = require('./OrderController');
const TokenAuthentication = require('../../middlewares/TokenAuthentication');

const orderController = new OrderController();

const orderRoutes = express.Router();

orderRoutes
    .post('/', 
    TokenAuthentication.verifyToken, (req, res) => orderController.createOrder(req, res))
    .get('/customer', 
    TokenAuthentication.verifyToken, (req, res) => orderController.getAllOrdersByCustomer(req, res))
    .get('/seller', 
    TokenAuthentication.verifyToken, (req, res) => orderController.getAllOrdersBySeller(req, res))
    .patch('/:id', 
    TokenAuthentication.verifyToken, (req, res) => orderController.updateOrder(req, res));

module.exports = orderRoutes;
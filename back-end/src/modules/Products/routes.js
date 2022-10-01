const express = require('express');
const ProductController = require('./ProductController');
const TokenAuthentication = require('../../middlewares/TokenAuthentication');

const productController = new ProductController();

const productRoutes = express.Router();

productRoutes
.get(
    '/',
    (req, res) => productController.getAllProducts(req, res),
)
.get(
    '/purchasedProducts/:id',
    (req, res, next) => TokenAuthentication.verifyToken(req, res, next),
    (req, res) => productController.getProductPurchasedByCustomer(req, res),
  )
.get(
    '/soldProducts/:id',
    (req, res, next) => TokenAuthentication.verifyToken(req, res, next),
    (req, res) => productController.getProductsSoldBySeller(req, res),
);

module.exports = productRoutes;
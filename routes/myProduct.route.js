const express = require('express');
const myProductRouter = express.Router();
const { getSingleProduct } = require('../controllers/myProduct.controller');

// get single product by user email 
myProductRouter.get('/:email', getSingleProduct)

module.exports = myProductRouter;
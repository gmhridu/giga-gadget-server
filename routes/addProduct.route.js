const express = require('express');
const { newProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/addProduct.controller');

const addProductRouter = express.Router();

// create a product
addProductRouter.post('/', newProduct);

// get all products
addProductRouter.get('/', getAllProducts);

// get single product by Id
addProductRouter.get('/:id', getSingleProduct);

// update product by id 
addProductRouter.put('/:id', updateProduct);

// delete a product
addProductRouter.delete('/:id', deleteProduct);



module.exports = addProductRouter;
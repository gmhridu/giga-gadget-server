const mongoose = require('mongoose');

const myProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
})

const MyProduct = mongoose.model('MyProduct', myProductSchema);

module.exports = MyProduct;
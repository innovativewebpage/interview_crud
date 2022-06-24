const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  price: { type: Number, default: 0 },
  countInStock: { type: Number, default: 0},
  description: { type: String }
});


const productModel = mongoose.model('Product2', productSchema);

module.exports = productModel;




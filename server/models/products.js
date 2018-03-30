const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
  
  name: {
    type: String,
    text: true 
  },
  description: {
    type: String,
    text: true 
  },
  price: Number,
  currency: {
    type: String,
    default: 'KZT'
  }

})

module.exports = mongoose.model('Products', ProductsSchema)

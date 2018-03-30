const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true
  },

  role: {
    type: String,
    require: true,
    default: 'user'
  }
  
})

module.exports = mongoose.model('User', UserSchema)

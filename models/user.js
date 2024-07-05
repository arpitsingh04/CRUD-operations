const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/democrud");

const userSchema = mongoose.Schema({
   name:{
     type:String
   },
   email:{
    type:String
  },
  image:{
    type:String
  }

    // name : String,
    // email : String,
    // image : String
})

module.exports = mongoose.model('user', userSchema);
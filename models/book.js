const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title:{
    type: String,
    required : [true,'book title is required'],
    trim : true,
    maxlength : [100,'length cannot more than 100']
  },
  author:{
    type: String,
    required : [true,'author is required'],
    trim : true
  },
  year :{
    type : Number,
    required :[true, 'publication is required'],
    min: [1000,'year must be atleast 1000'],
    max: [new Date().getFullYear(), 'year cannot be in the future']
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model("Book",BookSchema);
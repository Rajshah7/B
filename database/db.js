const mongoose = require("mongoose");


const connectToDB = async () =>{  
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  }catch(error){
    console.error("mongodb connection failed",error);
    precess.exit;
  }
}

module.exports = connectToDB;
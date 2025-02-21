const Book = require("../models/book");


const getAllBooks = async(req,res) =>{
  try{
    const allBook = await Book.find({});
    if(allBook?.length >0){
      res.status(200).json({
        sucess: true,
        message: "All books fetched successfully",
        data: allBook
      })
    }else{
      res.status(404).json({
        sucess: false,
        message:"books are not there"
      })
    }
  }catch(error){
    console.log(e);
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })
  }
}

const getSingleBooksById = async(req,res) =>{
  try{
    const bookById = req.params.id;
    const singleBook = await Book.findById(bookById);
    if(!singleBook){
      res.status(404).json({
        sucess: false,
        message: "Book not found"
      })
    }
    res.status(200).json({
      sucess: true,
      message: "Book fetched successfully",
      data: singleBook
    })

  }catch(e){
    console.log(e);
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })
  }
}

const addNewBook = async(req,res) =>{
  try{
    const newBookFormData = req.body;
    const newCreateBook = await Book.create(newBookFormData);

    if(newBookFormData){
      res.status(201).json({
        sucess:true,
        message:"book created successfully",
        data:newCreateBook
      })
    }
  }catch(e){
    console.log(e);
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })
  }
}

const updateBook = async(req,res) =>{
  try{
    const bookBoody = req.body;
    const bookId = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(bookId,bookBoody,{new:true});

    if(!updateBook){
      res.status(404).json({
        success:false,
        message:"book not found"
      })
    }
    res.status(200).json({
      success:true,
      message:"book updated successfully",
      data : updateBook
    })
  }catch(e){
    console.log(e);
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })
  }
}
const deleteBook = async(req,res) =>{
  try{
    const deleteById = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(deleteById);

    if(!deleteBook){
      res.status(404).json({
        success:false,
        message:"book was not there"
      })
    }

    res.status(200).json({
      success:true,
      message:"book deleted successfully",
      data : deleteBook
    })
  }catch(e){
    console.log(e);
    res.status(500).json({
      success:false,
      message:"something went wrong"
    })
  }
}
 
module.exports = {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBook,
  deleteBook
}
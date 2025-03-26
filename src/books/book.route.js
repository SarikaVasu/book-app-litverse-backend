const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook, searchBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", verifyAdminToken, postABook)

router.get("/search", searchBook);

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteABook)

module.exports = router;

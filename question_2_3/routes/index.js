const express = require('express');
const bookController = require('../controllers/book.controller');

const router = express.Router();
/**
 * •Fetch all books (GET /api/books)
    •Fetch a single book by ID (GET /api/books/:id)
    •Add a new book (POST /api/books)
    •Update an existing book (PUT /api/books/:id)
    •Delete a book (DELETE /api/books/:id)
 */

router
  .route('/books')
  .get(bookController.getBooks);

router
  .route('/books/:bookId')
  .get(bookController.getBookById);

router
  .route('/books')
  .post(bookController.addBook);

router
  .route('/books/:bookId')
  .put(bookController.updateBook);

router
  .route('/books/:bookId')
  .delete(bookController.deleteBook);

module.exports = router;

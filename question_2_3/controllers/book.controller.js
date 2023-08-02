const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const bookService = require('../services/book.service');

const getBooks = catchAsync(async (req, res) => {
  const result = await bookService.getBooks();
  res.send(result);
});

const getBookById = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.bookId);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
  }
  res.send(book);
});

const updateBook = catchAsync(async (req, res) => {
  const book = await bookService.updateBookById(req.params.bookId, req.body);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'book not found');
  }
  res.send(book);
});

const addBook = catchAsync(async (req, res) => {
  const book = await bookService.addBook(req.body);
  res.send(book);
});

const deleteBook = catchAsync(async (req, res) => {
  const isDeleted = await bookService.deleteBookById(req.params.bookId);
  res.send({ isDeleted });
});

module.exports = {
  getBooks,
  getBookById,
  addBook,
  deleteBook,
  updateBook,
};

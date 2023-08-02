const Book = require('../models/book.model');

/**
 * Create a book
 * @param {Object} bookBody
 * @returns {Promise<book>}
 */
const addBook = async (bookBody) => {
  const newBook = new Book(bookBody.title, bookBody.author, bookBody.publicationYear);
  const result = await Book.create(newBook);
  return result;
};

/**
 * Query for books
 * @returns {Promise<QueryResult>}
 */
const getBooks = async () => {
  const books = await Book.find();
  return books;
};

/**
 * Get book by id
 * @param {ObjectId} id
 * @returns {Promise<book>}
 */
const getBookById = async (id) => Book.findById(id);

/**
 * Update book by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<book>}
 */
const updateBookById = async (bookId, updateBody) => {
  const book = await getBookById(bookId);
  if (!book) return Promise.resolve(null);
  Object.assign(book, updateBody);
  const result = await Book.save(book);
  return result;
};

const deleteBookById = async (bookId) => {
  const book = await getBookById(bookId);
  if (!book) return Promise.resolve(null);
  return Book.delete(bookId);
};

module.exports = {
  addBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};

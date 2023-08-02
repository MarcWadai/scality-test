const { v4: uuidv4 } = require('uuid');
const db = require('../config/db');
const logger = require('../utils/logger');

class Book {
  constructor(title = '', author = '', publicationYear = 999) {
    this.id = uuidv4();
    this.author = author;
    this.title = title;
    this.publicationYear = publicationYear;
  }

  static findById(id) {
    const book = db.data.find((b) => b.id === id);
    return Promise.resolve(book);
  }

  static find() {
    return Promise.resolve(db.data);
  }

  static create(book) {
    db.data.push(book);
    return Promise.resolve(db.data[db.data.length - 1]);
  }

  static save(book) {
    const index = db.data.findIndex((b) => b.id === book.id);
    db.data[index] = book;
    return Promise.resolve(db.data[index]);
  }

  static delete(bookId) {
    db.data = db.data.filter((b) => b.id !== bookId);
    return Promise.resolve(true);
  }
}
module.exports = Book;

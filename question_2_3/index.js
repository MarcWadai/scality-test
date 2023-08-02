/**

Question 2: Web API Development
Develop a simple RESTful API using Node.js and Express to manage a collection of books.
Each book should have the following properties: id, title, author, and publicationYear.

The API should support the following operations:
    •Fetch all books (GET /api/books)
    •Fetch a single book by ID (GET /api/books/:id)
    •Add a new book (POST /api/books)
    •Update an existing book (PUT /api/books/:id)
    •Delete a book (DELETE /api/books/:id)
You may use an in-memory array to store the books for this test.
No database setup is required.
Question 3: Error Handling and Asynchronous API Data Fetching
Refactor the following code to handle errors appropriately using
promises or async/await. The function is intended to fetch data from an API,
but it's currently not handling errors properly.

 */
const PORT = 3004;
const express = require('express');
const helmet = require('helmet');
const logger = require('./utils/logger');
const routes = require('./routes');
const { errorConverter, errorHandler } = require('./middlewares/error');

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/api', routes);

// convert error to ApiError, if needed and handle error
app.use(errorConverter, errorHandler);

app.listen(PORT, () => {
  logger.info(`Listening to port ${PORT}`);
});

module.exports = app;

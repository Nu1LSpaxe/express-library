const express = require('express');
const router = express.Router();

// Require controller modules
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookinstanceController = require('../controllers/bookinstanceController');

/**
 * Book Routes
 */

// GET catalog home page
router.get('/', bookController.index);

// GET request for creating Book
// note: this must come before routes which display Book(uses id)
router.get('/book/create', bookController.book_create_get);

// POST request for creating Book
router.post('/book/create', bookController.book_create_post);

// GET request to delete Book
router.get('/book/:id/delete', bookController.book_delete_get);

// POST request to delete Book
router.post('/book/:id/delete', bookController.book_delete_post);

// GET request to update Book
router.get('/book/:id/update', bookController.book_update_get);

// POST request to update Book
router.post('/book/:id/update', bookController.book_update_post);

// GET request for specific Book (including detail)
router.get('/book/:id', bookController.book_detail);

// GET request for list of all Books
router.get('/books', bookController.book_list);


/**
 * Author Routes
 */

// GET request for creating Author
// note: this must come before route for id (i.e. display author).
router.get("/author/create", authorController.author_create_get);

// POST request for creating Author
router.post("/author/create", authorController.author_create_post);

// GET request to delete Author
router.get("/author/:id/delete", authorController.author_delete_get);

// POST request to delete Author
router.post("/author/:id/delete", authorController.author_delete_post);

// GET request to update Author
router.get("/author/:id/update", authorController.author_update_get);

// POST request to update Author
router.post("/author/:id/update", authorController.author_update_post);

// GET request for one Author
router.get("/author/:id", authorController.author_detail);

// GET request for list of all Authorsp
router.get("/authors", authorController.author_list);


/**
 * Genre Routes
 */

// GET request for creating a Genre
// note: this must come before route displays Genre by id
router.get("/genre/create", genreController.genre_create_get);

//POST request for creating Genre
router.post("/genre/create", genreController.genre_create_post);

// GET request to delete Genre
router.get("/genre/:id/delete", genreController.genre_delete_get);

// POST request to delete Genre
router.post("/genre/:id/delete", genreController.genre_delete_post);

// GET request to update Genre
router.get("/genre/:id/update", genreController.genre_update_get);

// POST request to update Genre
router.post("/genre/:id/update", genreController.genre_update_post);

// GET request for one Genre
router.get("/genre/:id", genreController.genre_detail);

// GET request for list of all Genre
router.get("/genres", genreController.genre_list);


/**
 * BookInstance Routes
 */

// GET request for creating a BookInstance
// note: this must come before route that displays BookInstance (uses id)
router.get(
  "/bookinstance/create",
  bookinstanceController.bookinstance_create_get,
);

// POST request for creating BookInstance
router.post(
  "/bookinstance/create",
  bookinstanceController.bookinstance_create_post,
);

// GET request to delete BookInstance
router.get(
  "/bookinstance/:id/delete",
  bookinstanceController.bookinstance_delete_get,
);

// POST request to delete BookInstance
router.post(
  "/bookinstance/:id/delete",
  bookinstanceController.bookinstance_delete_post,
);

// GET request to update BookInstance
router.get(
  "/bookinstance/:id/update",
  bookinstanceController.bookinstance_update_get,
);

// POST request to update BookInstance
router.post(
  "/bookinstance/:id/update",
  bookinstanceController.bookinstance_update_post,
);

// GET request for one BookInstance
router.get("/bookinstance/:id", bookinstanceController.bookinstance_detail);

// GET request for list of all BookInstance
router.get("/bookinstances", bookinstanceController.bookinstance_list);


module.exports = router;
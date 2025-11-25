import express from "express";

import {
  createBookController,
  getAllBooksController,
  updateBookController,
  deleteBookController,
  getBookByTitleController,
  getBookByAuthorController,
  getBookByYearController,
  getBookByGenreController,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", createBookController);
router.get("/books", getAllBooksController);
router.put("/books/:id", updateBookController);
router.delete("/books/:id", deleteBookController);
router.get("/books/title/:title", getBookByTitleController);
router.get("/books/author/:author", getBookByAuthorController);
router.get("/books/year/:year", getBookByYearController);
router.get("/books/genre/:genre", getBookByGenreController);

export default router;

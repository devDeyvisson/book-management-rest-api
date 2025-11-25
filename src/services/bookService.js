import {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBookByTitle,
  getBookByAuthor,
  getBookByYear,
  getBookByGenre,
} from "../repositories/bookRepository.js";

export async function createBookService(title, author, year, genre) {
  try {
    return await createBook(title, author, year, genre);
  } catch (error) {
    next(error);
  }
}

export async function getAllBooksService() {
  try {
    return await getAllBooks();
  } catch (error) {
    next(error);
  }
}

export async function updateBookService(id, title, author, year, genre) {
  try {
    return await updateBook(id, title, author, year, genre);
  } catch (error) {
    next(error);
  }
}

export async function deleteBookService(id) {
  try {
    return await deleteBook(id);
  } catch (error) {
    next(error);
  }
}

export async function getBookByTitleService(title) {
  try {
    return await getBookByTitle(title);
  } catch (error) {
    next(error);
  }
}

export async function getBookByAuthorService(author) {
  try {
    return await getBookByAuthor(author);
  } catch (error) {
    next(error);
  }
}

export async function getBookByYearService(year) {
  try {
    return await getBookByYear(year);
  } catch (error) {
    next(error);
  }
}

export async function getBookByGenreService(genre) {
  try {
    return await getBookByGenre(genre);
  } catch (error) {
    next(error);
  }
}

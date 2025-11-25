import {
  createBookService,
  getAllBooksService,
  updateBookService,
  deleteBookService,
  getBookByTitleService,
  getBookByAuthorService,
  getBookByYearService,
  getBookByGenreService,
} from "../services/bookService.js";

export async function createBookController(request, response, next) {
  try {
    const { title, author, year, genre } = request.body;

    if (!title || !author || !year || !genre) {
      return response.status(400).json({ message: "All fields are required." });
    }

    const newBook = await createBookService(title, author, year, genre);

    response.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
}

export async function getAllBooksController(request, response, next) {
  try {
    const books = await getAllBooksService();

    response.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function updateBookController(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json("Id is required.");
    }

    const { title, author, year, genre } = request.body;

    const updatedBook = await updateBookService(id, title, author, year, genre);

    if (!updatedBook) {
      return response.status(404).json({ message: "Book not found." });
    }

    response.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
}

export async function deleteBookController(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json("Id is required.");
    }

    const deletedBook = await deleteBookService(id);

    if (!deletedBook) {
      return response.staus(404).json({ message: "Book not found" });
    }

    response.status(204).end();
  } catch (error) {
    next(error);
  }
}

export async function getBookByTitleController(request, response, next) {
  try {
    const { title } = request.params;

    const book = await getBookByTitleService(title);

    if (!book) {
      return response.status(404).json({ message: "Book not found." });
    }

    response.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

export async function getBookByAuthorController(request, response, next) {
  try {
    const { author } = request.params;

    const book = await getBookByAuthorService(author);

    if (!book) {
      return response.status(404).json({ messge: "Book not found." });
    }

    response.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

export async function getBookByYearController(request, response, next) {
  try {
    const { year } = request.params;

    const book = await getBookByYearService(year);

    if (!book) {
      return response.status(404).json({ messge: "Book not found." });
    }

    response.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

export async function getBookByGenreController(request, response, next) {
  try {
    const { genre } = request.params;

    const book = await getBookByGenreService(genre);

    if (!book) {
      return response.status(404).json({ messge: "Book not found." });
    }

    response.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

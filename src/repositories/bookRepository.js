import Book from "../database/schema/bookShema.js";

export async function createBook(title, author, year, genre) {
  try {
    const newBook = new Book({
      title,
      author,
      year,
      genre,
    });

    return await newBook.save();
  } catch (error) {
    next(error);
  }
}

export async function getAllBooks() {
  try {
    return await Book.find();
  } catch (error) {
    next(error);
  }
}

export async function updateBook(id, title, author, year, genre) {
  try {
    return await Book.findByIdAndUpdate(
      id,
      { title, author, year, genre },
      { new: true, runValidators: true }
    );
  } catch (error) {
    next(error);
  }
}

export async function deleteBook(id) {
  try {
    return await Book.findByIdAndDelete(id);
  } catch (error) {
    next(error);
  }
}

export async function getBookByTitle(title) {
  try {
    return await Book.find({ title });
  } catch (error) {
    next(error);
  }
}

export async function getBookByAuthor(author) {
  try {
    return await Book.find({ author });
  } catch (error) {
    next(error);
  }
}

export async function getBookByYear(year) {
  try {
    return await Book.find({ year });
  } catch (error) {
    next(error);
  }
}

export async function getBookByGenre(genre) {
  try {
    return await Book.find({ genre });
  } catch (error) {
    next(error);
  }
}

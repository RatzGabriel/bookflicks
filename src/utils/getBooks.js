import { addBooks, toggleLoading } from './booksSlice';

const getBooks = async (genre, dispatch, books) => {
  console.log(genre);
  if (books[genre] != undefined && books[genre].length > 0) {
    return books[genre];
  }

  let json;
  try {
    dispatch(toggleLoading(true));
    const genreSearch = genre == '' ? 'search-terms' : genre;
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${genreSearch}&key=${process.env.GOOGLE_KEY}`,
    );
    json = await data.json();

    if (json.items == undefined) return;

    dispatch(
      addBooks({
        searchQuery: genre,
        results: json.items,
      }),
    );
    dispatch(toggleLoading(false));
  } catch (error) {
    if (error) {
      dispatch(toggleLoading(false));
      return error;
    }
  }
};

export default getBooks;

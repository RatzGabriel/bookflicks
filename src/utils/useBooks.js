import { useDispatch, useSelector } from 'react-redux';
import { loadAllBooks } from '../pages/Home/loadAllBooks';

export const useBooks = () => {
  const dispatch = useDispatch();

  const load = async () => {
    dispatch(loadAllBooks(dispatch, getAllBooks));
  };

  const getAllBooks = () => {
    const books = useSelector((store) => store.books.allBooks);
    return books;
  };

  return { load, getAllBooks };
};

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooks from '../../utils/getBooks';
import useInput from '../../hooks/useInput';
import { setSearchValue } from '../../utils/booksSlice';

function Search() {
  const allBooks = useSelector((store) => store.books.allBooks);
  const searchText = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchValue(searchText.value));

    const timer = setTimeout(() => {
      getBooks(searchText.value, dispatch, allBooks);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText.value]);

  return (
    <input
      type="text"
      className="text-black"
      placeholder="Search for Books or categories"
      {...searchText}
    />
  );

  // const inputReference = useRef(null);

  // const { all } = allBooks;
  // const searchText = useInput('');
  // const dispatch = useDispatch();

  // useEffect(() => {
  // 	inputReference.current.focus();
  // }, []);

  // useEffect(() => {
  // 	if (searchText.value === '') {
  // 		return setSearchBooks([]);
  // 	}
  // 	const timer = setTimeout(() => {
  // 		getBooks(searchText.value, dispatch, allBooks);
  // 		allBooks[searchText.value] != undefined &&
  // 			setSearchBooks(allBooks[searchText.value]);
  // 	}, 1000);

  // 	return () => {
  // 		clearTimeout(timer);
  // 	};
  // }, [searchText.value, allBooks]);

  // if (loading) return <LoadingSpiner />;

  // if (all === undefined) return null;

  // return (
  // 	<>
  // 		<input
  // 			autoFocus
  // 			ref={inputReference}
  // 			type="text"
  // 			data-testid="searchinput"
  // 			className="   border-white bg-black text-white my-10  p-2 md:p-10 rounded  md:rounded-full border-2 text-sm md:text-3xl font-bold flex "
  // 			placeholder="Search for Books or categories"
  // 			{...searchText}
  // 		/>

  // 	</>
  // );
}

export default Search;

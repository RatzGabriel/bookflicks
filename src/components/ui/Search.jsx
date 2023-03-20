import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooks from '../../utils/getBooks';
import useInput from '../../hooks/useInput';
import ContainerTitle from './ContainerTitle';
import LoadingSpiner from './LoadingSpiner';

function Search() {
	const allBooks = useSelector((store) => store.books.allBooks);
	const loading = useSelector((store) => store.books.loading);
	const [searchBooks, setSearchBooks] = useState([]);
	const inputReference = useRef(null);

	const { all } = allBooks;
	const searchText = useInput('');
	const dispatch = useDispatch();

	useEffect(() => {
		inputReference.current.focus();
	}, []);

	useEffect(() => {
		if (searchText.value === '') {
			return setSearchBooks([]);
		}
		const timer = setTimeout(() => {
			getBooks(searchText.value, dispatch, allBooks);
			allBooks[searchText.value] != undefined &&
				setSearchBooks(allBooks[searchText.value]);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [searchText.value, allBooks]);

	if (loading) return <LoadingSpiner />;

	if (all === undefined) return null;

	return (
		<>
			<input
				autoFocus
				ref={inputReference}
				type="text"
				data-testid="searchinput"
				className=" w-full md:w-2/3   border-white bg-black text-white my-10  p-2 md:p-10 rounded  md:rounded-full border-2 text-sm md:text-3xl font-bold flex "
				placeholder="Search for Books or categories"
				{...searchText}
			/>

			{searchBooks.length > 0 ? (
				<ContainerTitle
					text={searchText.value}
					books={searchBooks}
					isSearchResult
					title={searchText.value}
					length={all}
				/>
			) : null}
		</>
	);
}

export default Search;

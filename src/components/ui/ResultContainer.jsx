import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContainerTitle from './ContainerTitle';

const ResultContainer = () => {
	const searchValue = useSelector((store) => store.books.searchValue);
	const allBooks = useSelector((store) => store.books.allBooks);
	const [searchBooks, setSearchBooks] = useState([]);

	useEffect(() => {
		if (searchValue === '') return setSearchBooks([]);
		console.log('searchValue', searchValue);
		console.log('allBooks', allBooks);
		if (
			allBooks[searchValue] != undefined &&
			allBooks[searchValue].length > 0
		) {
			setSearchBooks(allBooks[searchValue]);
		}
	}, [searchValue, allBooks]);
	console.log(searchBooks);

	return (
		searchBooks.length > 0 && (
			<div className="w-full">
				<ContainerTitle
					resultContainer="resultContainer"
					text={searchValue}
					books={searchBooks}
					isSearchResult
					title={searchValue}
					length={searchBooks.length}
				/>
			</div>
		)
	);
};

export default ResultContainer;

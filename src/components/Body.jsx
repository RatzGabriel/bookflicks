import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	CONTAINER_TITLE_1,
	CONTAINER_TITLE_2,
	CONTAINER_TITLE_3,
	TOP_TITLE_1,
	TOP_TITLE_2,
} from '../utils/constants';
import BigContainer from './BigContainer';
import ContainerTitle from './ContainerTitle';
import { Shimmer, GreatShimmer } from './Shimmer';
import getBooks from '../utils/getBooks';
import {
	loadFavorites,
	loadFavoritesFromStorage,
} from '../utils/favoritesSlice';

const Body = () => {
	const dispatch = useDispatch();
	const load = async () => {
		const favoriteFromLocal = await loadFavorites();
		dispatch(loadFavoritesFromStorage(favoriteFromLocal));
	};

	useEffect(() => {
		load();
	}, []);
	const all = useSelector((store) => store.books.allBooks.all);
	const fantasy = useSelector((store) => store.books.allBooks.fantasy);
	const comedy = useSelector((store) => store.books.allBooks.comedy);
	const crime = useSelector((store) => store.books.allBooks.crime);

	useEffect(() => {
		try {
			getBooks('all', dispatch, getAllBooks);
			getBooks('fantasy', dispatch, getAllBooks);
			getBooks('comedy', dispatch, getAllBooks);
			getBooks('crime', dispatch, getAllBooks);
		} catch (error) {
			console.error('Failed to fetch books', error);
		}
	}, []);

	const getAllBooks = () => {
		const books = useSelector((store) => store.books.allBooks);
		return books;
	};

	if (all == undefined || all.length == 0)
		return (
			<>
				<GreatShimmer />
				<Shimmer />
				<Shimmer />
				<Shimmer />
			</>
		);

	return (
		<div data-testid="bodyComponent" className="pt-20 md:pt-0 font-bookflix ">
			<BigContainer book={all[3]} />
			<ContainerTitle books={fantasy} title={CONTAINER_TITLE_1} />
			<ContainerTitle books={comedy} title={CONTAINER_TITLE_2} />
			<ContainerTitle books={all} title={TOP_TITLE_1} row="1" top={true} />
			<ContainerTitle books={all} title={TOP_TITLE_2} row="2" top={true} />
			<ContainerTitle books={crime} title={CONTAINER_TITLE_3} />
		</div>
	);
};

export default Body;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadFavorites,
	loadFavoritesFromStorage,
} from '../../utils/favoritesSlice';
import ContainerTitle from '../../components/ui/ContainerTitle';

const Favorites = () => {
	const dispatch = useDispatch();
	const favorites = useSelector((store) => store.favorites.items);

	const load = async () => {
		const favoriteFromLocal = await loadFavorites();
		dispatch(loadFavoritesFromStorage(favoriteFromLocal));
	};

	useEffect(() => {
		load();
	}, []);

	return <ContainerTitle books={favorites} title={'Favorites'} />;
};

export default Favorites;

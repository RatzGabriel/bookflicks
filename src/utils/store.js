import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
import booksSlice from './booksSlice';

const store = configureStore({
	reducer: {
		favorites: favoritesSlice,
		books: booksSlice,
	},
});

export default store;

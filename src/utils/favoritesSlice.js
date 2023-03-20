import { createSlice } from '@reduxjs/toolkit';

export const loadFavorites = async function () {
	let favorites = localStorage.getItem('favorites');
	if (favorites) {
		return JSON.parse(favorites);
	} else {
		return [];
	}
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		items: [],
	},
	reducers: {
		clearFavorites: (state, action) => {
			state.items = [];
			localStorage.setItem('favorites', JSON.stringify([]));
		},
		addToFavorites: (state, action) => {
			if (!state.items.find((book) => book.id == action.payload.id))
				state.items.push(action.payload);
			localStorage.setItem('favorites', JSON.stringify(state.items));
		},

		removeFromFavorites: (state, action) => {
			state.items = state.items.filter((book) => book.id != action.payload.id);
			localStorage.setItem('favorites', JSON.stringify(state.items));
		},
		loadFavoritesFromStorage: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const {
	clearFavorites,
	addToFavorites,
	removeFromFavorites,
	loadFavoritesFromStorage,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;

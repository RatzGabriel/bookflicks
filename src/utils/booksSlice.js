import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
	name: 'books',
	initialState: {
		allBooks: {
			all: [],
			comedy: [],
			fantasy: [],
			crime: [],
		},
		loading: false,
		searchValue: '',
	},
	reducers: {
		addBooks: (state, action) => {
			state.allBooks[action.payload.searchQuery] = action.payload.results;
		},
		toggleLoading: (state, action) => {
			state.loading = action.payload;
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
	},
});

export const { addBooks, toggleLoading, setSearchValue } = booksSlice.actions;
export default booksSlice.reducer;

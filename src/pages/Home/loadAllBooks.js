import getBooks from '../../utils/getBooks';

export const loadAllBooks = () => async (dispatch, getAllBooks) => {
	try {
		getBooks('all', dispatch, getAllBooks);
		getBooks('fantasy', dispatch, getAllBooks);
		getBooks('comedy', dispatch, getAllBooks);
		getBooks('crime', dispatch, getAllBooks);
	} catch (error) {
		console.error('Failed to fetch books', error);
	}
};

import { render, waitFor, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { BOOK_DATA } from '../../../mocks/data';
import Home from '../Home';
import '@testing-library/jest-dom';
import store from '../../../utils/store';
import getBooks from '../../../utils/getBooks';

// Mock the useSelector hook
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

global.fetch = jest.fn(() => {
	return Promise.resolve({
		//Mock data layer
		json: () => {
			return Promise.resolve(BOOK_DATA);
		},
	});
});

test('Render Home', async () => {
	// Set up the mock selector to return some test data

	useSelector.mockReturnValue(BOOK_DATA);

	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Home />
			</Provider>
		</StaticRouter>
	);

	await waitFor(() => screen.getByTestId('homeComponent'));
	const homeComponent = body.getByTestId('homeComponent');
	expect(homeComponent).toBeInTheDocument();
});

jest.mock('../../utils/getBooks', () => {
	return {
		getBooks: jest.fn().mockRejectedValue(new Error('Failed to fetch books')),
	};
});

test('fetching books throws error', async () => {
	const errorMock = jest.fn(); // Create a mock function for console.error

	console.error = errorMock; // Set the console.error function to the mock function

	render(
		<StaticRouter>
			<Provider store={store}>
				<Home />
			</Provider>
		</StaticRouter>
	);

	expect(errorMock).toHaveBeenCalledWith('Failed to fetch books');
});

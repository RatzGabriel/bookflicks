import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Home from '../../Home/index';
import '@testing-library/jest-dom';
import store from '../../../utils/store';
import { mockBOOK_DATA } from '../../../data/mocks/data';
import {
	CONTAINER_TITLE_1,
	CONTAINER_TITLE_2,
	CONTAINER_TITLE_3,
} from '../../../utils/constants';
import favoritesSlice, {
	addToFavorites,
	clearFavorites,
	loadFavorites,
} from '../../../utils/favoritesSlice';

global.fetch = jest
	.fn()
	.mockReturnValueOnce(
		Promise.resolve({ json: () => Promise.resolve(mockBOOK_DATA.all) })
	)
	.mockReturnValueOnce(
		Promise.resolve({ json: () => Promise.resolve(mockBOOK_DATA.fantasy) })
	)
	.mockReturnValueOnce(
		Promise.resolve({ json: () => Promise.resolve(mockBOOK_DATA.comedy) })
	)
	.mockReturnValueOnce(
		Promise.resolve({ json: () => Promise.resolve(mockBOOK_DATA.crime) })
	);

it('should render the Home component', async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Home />
			</Provider>
		</StaticRouter>
	);

	await waitFor(() => expect(body.getByTestId('homeComponent')));
	const homeComponent = body.getByTestId('homeComponent');
	expect(homeComponent).toBeInTheDocument();
});

it('should render the Big Container component', async () => {
	async () => {
		const body = render(
			<Provider store={store}>
				<StaticRouter>
					<Home />
				</StaticRouter>
			</Provider>
		);
		await waitFor(() => body.getByTestId('big-container'));
		const bigContainer = body.getByTestId('big-container');
		expect(bigContainer).toBeInTheDocument();
	};
});

it('should render the ContainerTitle component with the correct books and title', () => {
	async () => {
		const body = render(
			<Provider store={store}>
				<StaticRouter>
					<Home />
				</StaticRouter>
			</Provider>
		);
		await waitFor(() => body.getByTestId('container-title'));
		const containerTitles = screen.queryAllByTestId('container-title');
		expect(containerTitles.length).toBe(3);
		expect(containerTitles[0]).toHaveAttribute(
			'books',
			JSON.stringify(fantasy)
		);
		expect(containerTitles[0]).toHaveAttribute('title', CONTAINER_TITLE_1);

		expect(containerTitles[1]).toHaveAttribute('books', JSON.stringify(comedy));
		expect(containerTitles[1]).toHaveAttribute('title', CONTAINER_TITLE_2);

		expect(containerTitles[2]).toHaveAttribute('books', JSON.stringify(crime));
		expect(containerTitles[2]).toHaveAttribute('title', CONTAINER_TITLE_3);
	};
});

describe('loadFavorites', () => {
	it('returns an empty array if there are no favorites stored in localStorage', async () => {
		localStorage.clear();

		const result = await loadFavorites();

		expect(result).toEqual([]);
	});

	it('returns an array of favorites stored in localStorage', async () => {
		const mockFavorites = [
			{ id: 1, title: 'Mock Book 1' },
			{ id: 2, title: 'Mock Book 2' },
		];
		localStorage.setItem('favorites', JSON.stringify(mockFavorites));

		const result = await loadFavorites();

		expect(result).toEqual(mockFavorites);
	});
});

describe('favoritesSlice reducers', () => {
	describe('clearFavorites', () => {
		it('clears the favorites array in the state and localStorage', () => {
			const state = {
				items: [
					{ id: 1, title: 'Mock Book 1' },
					{ id: 2, title: 'Mock Book 2' },
				],
			};
			localStorage.setItem('favorites', JSON.stringify(state.items));
			const action = clearFavorites();

			const result = favoritesSlice(state, action);

			expect(result.items).toEqual([]);
			expect(JSON.parse(localStorage.getItem('favorites'))).toEqual([]);
		});
	});

	it('adds a new book to the favorites array in the state and localStorage', () => {
		const state = {
			items: [{ id: 1, title: 'Mock Book 1' }],
		};
		localStorage.setItem('favorites', JSON.stringify(state.items));
		const newBook = { id: 2, title: 'Mock Book 2' };
		const action = addToFavorites(newBook);

		const result = favoritesSlice(state, action);

		expect(result.items).toContainEqual(newBook);
		expect(JSON.parse(localStorage.getItem('favorites'))).toContainEqual(
			newBook
		);
	});
});

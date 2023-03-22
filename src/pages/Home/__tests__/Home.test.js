import { render, waitFor, screen, renderHook } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Home from '../../Home/index';
import '@testing-library/jest-dom';
import store from '../../../utils/store';
import getBooks from '../../../utils/getBooks';
import { loadAllBooks } from '../../Home/loadAllBooks';
import { mockBOOK_DATA } from '../../../data/mocks/data.js';
import {
	loadFavorites,
	loadFavoritesFromStorage,
} from '../../../utils/favoritesSlice';
import { getAllBooks } from '../Home';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

describe('Home component', () => {
	jest.mock('../../../utils/getBooks', () => {
		return {
			default: jest.fn(),
			all: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.all)),
			fantasy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.fantasy)),
			comedy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.comedy)),
			crime: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.crime)),
		};
	});

	useSelector.mockReturnValue(mockBOOK_DATA);
	it('should render the Home component', async () => {
		async () => {
			const body = render(
				<Provider store={store}>
					<StaticRouter>
						<Home />
					</StaticRouter>
				</Provider>
			);
			await waitFor(() => body.getByTestId('homeComponent'));
			const homeComponent = body.getByTestId('homeComponent');
			expect(homeComponent).toBeInTheDocument();
		};
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

			expect(containerTitles[1]).toHaveAttribute(
				'books',
				JSON.stringify(comedy)
			);
			expect(containerTitles[1]).toHaveAttribute('title', CONTAINER_TITLE_2);

			expect(containerTitles[2]).toHaveAttribute(
				'books',
				JSON.stringify(crime)
			);
			expect(containerTitles[2]).toHaveAttribute('title', CONTAINER_TITLE_3);
		};
	});
});

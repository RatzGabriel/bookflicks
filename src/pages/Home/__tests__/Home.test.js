import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Home from '../../Home/index';
import '@testing-library/jest-dom';
import store from '../../../utils/store';
import getBooks from '../../../utils/getBooks';
import { loadAllBooks } from '../../Home/loadAllBooks';
import { mockBOOK_DATA } from '../../../data/mocks/data.js';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('../../../utils/getBooks', () => {
	return {
		default: jest.fn(),

		all: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.all)),

		fantasy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.fantasy)),

		comedy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.comedy)),

		crime: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.crime)),
	};
});

describe('Body component', () => {
	useSelector.mockReturnValue(mockBOOK_DATA);
	it('should render the Body component', async () => {
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
});

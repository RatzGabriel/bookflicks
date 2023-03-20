import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { BOOK_DATA } from '../../mocks/data';
import Body from '../Body';
import '@testing-library/jest-dom';
import store from '../../utils/store';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		//Mock data layer
		json: () => {
			return Promise.resolve(BOOK_DATA);
		},
	});
});

test('Render Shimmer', () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);

	const shimmer = body.getByTestId('shimmer-ui');
	expect(shimmer).toBeInTheDocument();
});

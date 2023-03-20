import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Home from '../../pages/Home/index';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import { BOOK_DATA } from '../../data/mocks/data';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		//Mock data layer
		json: () => {
			return Promise.resolve(BOOK_DATA);
		},
	});
});

test('Render Shimmer', () => {
	// const body = render(
	// 	<StaticRouter>
	// 		<Provider store={store}>
	// 			<Home />
	// 		</Provider>
	// 	</StaticRouter>
	// );
	// const shimmer = body.getByTestId('shimmer-ui');
	// expect(shimmer).toBeInTheDocument();
});

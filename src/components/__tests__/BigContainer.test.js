import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { BOOK_DATA } from '../../mocks/data';
import Body from '../Body';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import BigContainer from '../BigContainer';
import { mockbook } from '../../mocks/book';
import { PLACEHOLDER_COVER } from '../../utils/constants';

test('Render placeholder image if no image link provided', () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<BigContainer book={mockbook} />
			</Provider>
		</StaticRouter>
	);

	const imageLink = body.getByTestId('image');
	expect(imageLink.src).toBe(PLACEHOLDER_COVER);
});

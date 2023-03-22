import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import BigContainer from '../../components/ui/BigContainer';
import { mockbook } from '../../data/mocks/book';
import { LANDINGPAGE_IMAGE, PLACEHOLDER_COVER } from '../../utils/constants';

test('Render placeholder image if no image link provided', () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<BigContainer book={mockbook} />
			</Provider>
		</StaticRouter>
	);
	const imageLink = body.getByTestId('image');
	expect(imageLink.src).toBe(LANDINGPAGE_IMAGE);
});

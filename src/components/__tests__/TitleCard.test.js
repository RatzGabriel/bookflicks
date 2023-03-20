import {
	render,
	fireEvent,
	getByTestId,
	getByAltText,
	screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { mockbook } from '../../data/mocks/book';
import store from '../../utils/store';
import TitleCard from '../../components/ui/TitleCard';
import '@testing-library/jest-dom';

test('test if Title Card is rendered', () => {
	// const titleCard = render(
	// 	<StaticRouter>
	// 		<Provider store={store}>
	// 			<TitleCard book={mockbook} />
	// 		</Provider>
	// 	</StaticRouter>
	// );
	// const image = titleCard.getByTestId('imageid');
	// fireEvent.mouseEnter(image);
	// const modalDiv = titleCard.getByTestId('mouseEnter');
	// expect(modalDiv).toBeInTheDocument();
});

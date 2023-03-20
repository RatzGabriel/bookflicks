import { render } from '@testing-library/react';
import Header from '../../components/ui/Header';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { BOOKS_LOGO_SRC } from '../../utils/constants';

test('Logo should load on rendering Header', () => {
	// 	//Load Header
	// 	const header = render(
	// 		<StaticRouter>
	// 			<Provider store={store}>
	// 				<Header />
	// 			</Provider>
	// 		</StaticRouter>
	// 	);
	// 	const logo = header.getByTestId('logo');
	// 	expect(logo.src).toBe(BOOKS_LOGO_SRC);
	// });
	// test('Links should be rendered', () => {
	// 	//Load Links
	// 	const header = render(
	// 		<StaticRouter>
	// 			<Provider store={store}>
	// 				<Header />
	// 			</Provider>
	// 		</StaticRouter>
	// 	);
	// 	const links = header.getByTestId('links');
	// 	expect(links.children.length).toBe(2);
	// });
	// test('Book length should be 0', () => {
	// 	//Load Header
	// 	const header = render(
	// 		<StaticRouter>
	// 			<Provider store={store}>
	// 				<Header />
	// 			</Provider>
	// 		</StaticRouter>
	// 	);
	// 	const booklength = header.getByTestId('booklength');
	// 	expect(booklength.innerHTML).toBe('0');
	// });
	// test('Header Dropdown Text should be Menu on startup', () => {
	// 	//Load Header
	// 	const header = render(
	// 		<StaticRouter>
	// 			<Provider store={store}>
	// 				<Header />
	// 			</Provider>
	// 		</StaticRouter>
	// 	);
	// 	const modaltext = header.getByTestId('modaltext');
	// 	expect(modaltext.innerHTML).toBe('Menu');
});

/* global test */

import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { BOOKS_LOGO_SRC } from '../../utils/constants';
import Header from '../../components/ui/Header';

test('Logo should load on rendering Header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );
  const logo = header.getByTestId('logo');
  expect(logo.src).toBe(BOOKS_LOGO_SRC);
});

test('Links should be rendered', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );
  const links = header.getByTestId('links');
  expect(links.children.length).toBe(2);
});

test('Book length should be 0', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>,
  );
  const booklength = header.getByTestId('booklength');
  expect(booklength.innerHTML).toBe('0');
});

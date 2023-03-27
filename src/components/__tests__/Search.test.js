/* global test */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { BOOK_DATA } from '../../data/mocks/data';
import store from '../../utils/store';
import Home from '../../pages/Home/index';
import Search from '../../components/ui/Search';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    //Mock data layer
    json: () => {
      return Promise.resolve(BOOK_DATA);
    },
  });
});

test('Search Results on Homepage', () => {
  const searchDiv = render(
    <StaticRouter>
      <Provider store={store}>
        <Search />
      </Provider>
    </StaticRouter>,
  );
  const search = searchDiv.getByTestId('searchinput');
  expect(search).toBeInTheDocument();
});

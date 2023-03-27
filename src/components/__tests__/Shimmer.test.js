/* global test */

import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Home from '../../pages/Home/index';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import { mockBOOK_DATA } from '../../data/mocks/data';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    //Mock data layer
    json: () => {
      return Promise.resolve(mockBOOK_DATA);
    },
  });
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

it('should render LandingPageShimmer when all is undefined', async () => {
  jest.clearAllMocks();
  jest.mock('../../utils/getBooks', () => {
    return {
      default: jest.fn(),
      all: jest.fn(() => Promise.resolve(undefined)),
      fantasy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.fantasy)),
      comedy: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.comedy)),
      crime: jest.fn(() => Promise.resolve(mockBOOK_DATA.allBooks.crime)),
    };
  });

  useSelector.mockReturnValue(undefined);
  const home = render(
    <Provider store={store}>
      <StaticRouter>
        <Home />
      </StaticRouter>
    </Provider>,
  );

  const shimmers = home.queryAllByTestId('shimmer-ui');
  expect(shimmers.length).toBeGreaterThanOrEqual(1);
});

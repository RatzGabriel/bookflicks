import { render, waitFor, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import Home from '../../pages/Home';
import { mockbook } from '../../data/mocks/book';
import { LANDINGPAGE_IMAGE, PLACEHOLDER_COVER } from '../../utils/constants';

test('Render ContainerTitle', async () => {});

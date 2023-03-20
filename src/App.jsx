import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './utils/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Shimmer } from './components/Shimmer';
import Favorites from './components/Favorites';

const AppLayout = () => {
	return (
		<div className="bg-black text-white w-full ">
			<div className="mx-auto w-4/5 min-h-screen">
				<Provider store={store}>
					<Header />
					<Outlet />
					<Footer />
				</Provider>
			</div>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
		],
	},
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

import ReactDom from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/index';
import Error from './components/ui/Error';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import store from './utils/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Favorites from './pages/Favorites/Favorites';
import 'firebase/app';
import 'firebase/auth';
import { auth } from './utils/firebase/firebase';

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
        element: <Home />,
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

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
import CategoryPage from './components/ui/CategoryPage';

const AppLayout = () => {
  return (
    <div className="bg-black text-white  min-h-screen ">
      <Provider store={store}>
        <Header />
        <div className=" mx-auto  w-4/6">
          <Outlet />
          <Footer />
        </div>
      </Provider>
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
      {
        path: '/fantasy',
        element: <CategoryPage categorie={'fantasy'} />,
      },
      {
        path: '/comedy',
        element: <CategoryPage categorie={'comedy'} />,
      },
      {
        path: '/crime',
        element: <CategoryPage categorie={'crime'} />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

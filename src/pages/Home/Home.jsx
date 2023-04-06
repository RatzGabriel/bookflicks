import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CONTAINER_TITLE_1,
  CONTAINER_TITLE_2,
  CONTAINER_TITLE_3,
  TOP_TITLE_1,
  TOP_TITLE_2,
} from '../../utils/constants';
import BigContainer from '../../components/ui/BigContainer';
import ContainerTitle from '../../components/ui/ContainerTitle';
import { loadFavorites } from '../../utils/favoritesSlice';
import LandingPageShimmer from './LandingPageShimmer';
import { loadAllBooks } from './loadAllBooks';
import ResultContainer from '../../components/ui/ResultContainer';
import LoadingSpiner from '../../components/ui/LoadingSpiner';
import { auth } from '../../utils/firebase/firebase';
import { setUser } from '../../utils/userSlice';
import { useBooks } from '../../utils/useBooks';

function checkAuthState(dispatch) {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      // User is signed out
      dispatch(setUser(null));
    }
  });

  // Return a function to unsubscribe when the component unmounts
  return () => unsubscribe();
}

const Home = () => {
  const dispatch = useDispatch();
  const { load } = useBooks();

  useEffect(() => {
    checkAuthState(dispatch);
  }, [dispatch]);

  useEffect(() => {
    load();
  }, []);

  const all = useSelector((store) => store.books.allBooks.all);
  const fantasy = useSelector((store) => store.books.allBooks.fantasy);
  const comedy = useSelector((store) => store.books.allBooks.comedy);
  const crime = useSelector((store) => store.books.allBooks.crime);
  const loading = useSelector((store) => store.books.loading);

  if (all == undefined || all.length == 0)
    return (
      <>
        <LandingPageShimmer />
      </>
    );

  return (
    <div data-testid="homeComponent" className="pt-20 md:pt-0 font-bookflix ">
      {loading && <LoadingSpiner />}
      <BigContainer book={all[3]} />
      <ResultContainer />
      <ContainerTitle books={fantasy} title={CONTAINER_TITLE_1} />
      <ContainerTitle books={comedy} title={CONTAINER_TITLE_2} />
      <ContainerTitle books={all} title={TOP_TITLE_1} row="1" top={true} />
      <ContainerTitle books={all} title={TOP_TITLE_2} row="2" top={true} />
      <ContainerTitle books={crime} title={CONTAINER_TITLE_3} />
    </div>
  );
};

export default Home;

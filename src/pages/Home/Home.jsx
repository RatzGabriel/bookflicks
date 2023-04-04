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
import { loadFavorites, loadFavoritesFromStorage } from '../../utils/favoritesSlice';
import LandingPageShimmer from './LandingPageShimmer';
import { loadAllBooks } from './loadAllBooks';
import ResultContainer from '../../components/ui/ResultContainer';
import { Shimmer } from '../../components/ui/Shimmer';
import LoadingSpiner from '../../components/ui/LoadingSpiner';

const Home = () => {
  const dispatch = useDispatch();

  const load = async () => {
    loadFavorites();
    dispatch(loadAllBooks(dispatch, getAllBooks));
  };

  useEffect(() => {
    load();
  }, []);

  const all = useSelector((store) => store.books.allBooks.all);
  const fantasy = useSelector((store) => store.books.allBooks.fantasy);
  const comedy = useSelector((store) => store.books.allBooks.comedy);
  const crime = useSelector((store) => store.books.allBooks.crime);
  const loading = useSelector((store) => store.books.loading);

  const getAllBooks = () => {
    const books = useSelector((store) => store.books.allBooks);
    return books;
  };

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

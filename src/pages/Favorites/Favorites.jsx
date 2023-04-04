import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites } from '../../utils/favoritesSlice';
import ContainerTitle from '../../components/ui/ContainerTitle';

// const fetchFavorites = () => async (dispatch) => {
//   const favorites = await loadFavorites();
//   dispatch(loadFavoritesFromStorage(favorites));
// };

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites.items);

  // const load = async () => {
  //   const favoriteFromLocal = await loadFavorites();
  //   dispatch(loadFavoritesFromStorage(favoriteFromLocal));
  // };

  useEffect(() => {
    console.log('favorites 1', favorites);
    dispatch(loadFavorites());
    console.log('favorites 2', favorites);
  }, []);

  // useEffect(() => {
  //   load();
  // }, []);

  console.log('favorites', favorites);
  if (!favorites || favorites == undefined || favorites.length == 0) {
    console.log('lentgh 0', favorites);
    return <div className="text-3xl font-bold text-center mt-20">No favorites yet</div>;
  }
  return <ContainerTitle books={favorites} title={'Favorites'} />;
};

export default Favorites;

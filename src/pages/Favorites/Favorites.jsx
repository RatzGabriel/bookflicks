import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites } from '../../utils/favoritesSlice';
import ContainerTitle from '../../components/ui/ContainerTitle';
import { auth } from '../../utils/firebase/firebase';
import { setUser } from '../../utils/userSlice';

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

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites.items);
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    checkAuthState(dispatch);
  }, [dispatch]);

  useEffect(() => {
    console.log(user);
    if (user == null) return;
    dispatch(loadFavorites(null, { extra: { user } }));
  }, [user]);

  useEffect(() => {
    console.log(user);
    if (user == null) return;
    dispatch(loadFavorites(null, { extra: { user } }));
  }, []);

  if (!favorites || favorites == undefined || favorites.length == 0) {
    return <div className="text-3xl font-bold text-center mt-20">No favorites yet</div>;
  }
  return <ContainerTitle books={favorites} title={'Favorites'} />;
};

export default Favorites;

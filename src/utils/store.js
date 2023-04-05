import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  getDef,
} from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
import booksSlice from './booksSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    books: booksSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, collection, onSnapshot, addDoc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase/firestore/firestore';

const favoritesRef = collection(db, 'favorites');

const updateFavorites = (favorites) => ({
  type: 'favorites/updateFavorites',
  payload: favorites,
});

export const loadFavorites = createAsyncThunk(
  'favorites/loadFavorites',
  async (_, { getState, dispatch }) => {
    console.log('load');
    try {
      const q = await collection(db, 'favorites');
      return new Promise((resolve) => {
        const unsubscribe = onSnapshot(q, (favoritesSnapshot) => {
          let updatedFavorites = [];
          favoritesSnapshot.forEach((doc) => {
            console.log(doc.data());
            updatedFavorites.push(doc.data());
          });
          console.log(updatedFavorites);
          // Update state with resolved payload
          dispatch(updateFavorites(updatedFavorites));
          resolve(updatedFavorites);
        });
      });
    } catch (error) {
      console.error('Error loading favorites:', error);
      throw error;
    }
  },
);

export const addToFavorites = createAsyncThunk('favorites/addToFavorites', async (book) => {
  const docRef = doc(favoritesRef, book.id);
  console.log(book.id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.log("Doc doesn't exist, adding it");
    try {
      await setDoc(docRef, book);
    } catch (error) {
      console.log(error);
    }
    return book;
  }
});

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async (book) => {
    console.log('start removing', book.id, book);
    const docRef = doc(favoritesRef, book.id);
    console.log(docRef);
    const docSnap = await getDoc(docRef);
    console.log('docSnap', docSnap);
    console.log(docSnap);
    console.log(docSnap.exists());

    if (!docSnap.exists()) {
      console.log("Doc doesn't exist, can't delete it");
      return;
    }
    try {
      console.log('Removing favorite:', book.id);
      await deleteDoc(docRef);
      console.log('Removed favorite:', book.id);
      return book.id;
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  },
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.pending, (state) => {
        console.log('pending');
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.loading = false;
        console.log(action.payload);
        state.items = action.payload;
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        console.log('rejected');
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateFavorites, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default favoritesSlice.reducer;

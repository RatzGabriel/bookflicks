import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase/firestore/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { setUser } from './userSlice';

const favoritesRef = collection(db, 'favorites');

const auth = getAuth();

const updateFavorites = (favorites) => ({
  type: 'favorites/updateFavorites',
  payload: favorites,
});

export const loadFavorites = createAsyncThunk(
  'favorites/loadFavorites',
  async (_, { dispatch }) => {
    const user = auth.currentUser;

    if (user.uid == null || user == null) {
      dispatch(updateFavorites([]));
    }

    try {
      const q = await query(collection(db, 'favorites'), where('userId', '==', user.uid));

      return new Promise((resolve) => {
        const unsubscribe = onSnapshot(q, (favoritesSnapshot) => {
          let updatedFavorites = [];
          favoritesSnapshot.forEach((doc) => {
            updatedFavorites.push(doc.data());
          });

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
  const userId = currentUser.uid;
  const docRef = doc(favoritesRef, book.id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    try {
      await setDoc(docRef, { ...book, userId });
    } catch (error) {
      throw error;
    }
    return { ...book, userId };
  }
});

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async (book) => {
    const userId = currentUser.uid;
    const docRef = doc(favoritesRef, book.id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return;
    }
    try {
      await deleteDoc(docRef);

      return book.id;
    } catch (error) {
      throw error;
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
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload;
      })
      .addCase(loadFavorites.rejected, (state, action) => {
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
      })
      .addCase(setUser, (state, action) => {
        if (!action.payload) {
          // User is signed out
          state.items = [];
        }
      });
  },
});

export default favoritesSlice.reducer;

import { createSerializableStateInvariantMiddleware, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const newUser = { ...action.payload };
      state.user = newUser;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    expires: null,
  },
  reducers: {
    signin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.expires = action.payload.expires;
    },
    signout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.expires = null;
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;

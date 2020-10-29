import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    timestamp: null,
  },
  reducers: {
    signin: (state) => {
      state.isAuthenticated = true;
      state.timestamp = Date.now();
    },
    signout: (state) => {
      state.isAuthenticated = false;
      state.timestamp = null;
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;

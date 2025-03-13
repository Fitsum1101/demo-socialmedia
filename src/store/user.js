import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isAuth: false };

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: user.reducer,
});

export const authaction = user.actions;
export default store;

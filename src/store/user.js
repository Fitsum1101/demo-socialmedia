import { createSlice, configureStore } from "@reduxjs/toolkit";

import { getToken, clearToken } from "./localstorage";

// const tokenExist = localStorage.getItem("token") ? true : false;

const initialState = { isAuth: getToken("token") };

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const tokenExist = getToken("token") ? true : false;
      state.isAuth = tokenExist;
    },
    logout: (state, action) => {
      clearToken("token");
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: user.reducer,
});

export const authaction = user.actions;
export default store;

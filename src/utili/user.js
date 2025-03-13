import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isAuth: false };

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    isAuthitcate: (state, action) => {
      state.isAuth = true;
    },
  },
});

const store = configureStore({
  reducer: user.reducer,
});

export const authaction = user.actions;
export default store;

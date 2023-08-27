import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice/apiSlice.js";

//configure store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

//configure store exports
export default store;

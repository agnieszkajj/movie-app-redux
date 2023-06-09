import moviesReducer from "./movies/movieSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { movies: moviesReducer },
});

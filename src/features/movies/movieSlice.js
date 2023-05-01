import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  singleMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.singleMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(fetchAsyncMovies.rejected, (state) => {
      console.log("rejected!");
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.shows = action.payload;
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
      state.singleMovieOrShow = action.payload;
    });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moviesApi from '../../common/apis/moviesApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchMovieAsync = createAsyncThunk(
  'movie/fetchMovieAsync',
  async (term) => {
    const response = await moviesApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchShowsAsync = createAsyncThunk(
  'movie/fetchShowsAsync',
  async (term) => {
    const response = await moviesApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchShowsAsyncOrFetchMovieAsync = createAsyncThunk(
  'movie/fetchShowsAsyncOrFetchMovieAsync',
  async (id) => {
    const response = await moviesApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  status: false,
};

const SliceMovies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeMovieOrShow(state) {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchMovieAsync.pending]: (state) => {
      console.log('Pending...');
      return { ...state, status: false };
    },
    [fetchMovieAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, movies: payload, status: true };
    },
    [fetchMovieAsync.rejected]: (state) => {
      console.log('Fetched Not Successfully!');
    },
    [fetchShowsAsync.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, shows: payload, status: true };
    },
    [fetchShowsAsyncOrFetchMovieAsync.fulfilled]: (state, { payload }) => {
      console.log('All Fetched Successfully!');
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeMovieOrShow } = SliceMovies.actions;
export const selectAllMovies = (state) => state.movies.movies;
export const selectAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getStatusShow = (state) => state.movies.status;
export default SliceMovies.reducer;

import { configureStore } from '@reduxjs/toolkit';
import SliceMovies from '../slice/MoviesSlice';

const Store = configureStore({
  reducer: {
    movies: SliceMovies,
  },
});

export default Store;

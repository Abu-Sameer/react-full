import React, { useEffect } from 'react';
import './Home.scss';
import MovieListing from '../movieListing/MovieListing';
import { useDispatch } from 'react-redux';
import {
  fetchMovieAsync,
  fetchShowsAsync,
} from '../../features/slice/MoviesSlice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const movie = 'death';
    const series = 'palace';
    dispatch(fetchMovieAsync(movie));
    dispatch(fetchShowsAsync(series));
  }, [dispatch]);

  return (
    <div>
      <div className="img"></div>
      <MovieListing />
    </div>
  );
}

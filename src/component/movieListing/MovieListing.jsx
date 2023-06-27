import React from 'react';
import './MovieListing.scss';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import {
  getStatusShow,
  selectAllMovies,
  selectAllShows,
} from '../../features/slice/MoviesSlice';
import Slider from 'react-slick';
import { Settings } from '../../common/Setting';

export default function MovieListing() {
  const movies = useSelector(selectAllMovies);
  const shows = useSelector(selectAllShows);
  const status = useSelector(getStatusShow);

  let renderMovies,
    renderShows = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div className="text-center">
        <h1 className="text-light">{movies.Error}</h1>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div className="text-center">
        <h1 className="text-light">{shows.Error}</h1>
      </div>
    );
  return (
    <div>
      <div className="my-2">
        <h2 className="mb-3 fw-bold text-center">Movies</h2>
        <div className="">
          {status ? (
            <Slider {...Settings}>{renderMovies}</Slider>
          ) : (
            <div className="text-center text-light">
              <div className="spinner-border" role="status"></div>
              <span className="fs-2 fw-bold ms-3">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <div className="my-2">
        <h2 className="mb-3 fw-bold text-center">Series</h2>
        <div className="row g-3">
          {status ? (
            <Slider {...Settings}>{renderShows}</Slider>
          ) : (
            <div className="text-center text-light">
              <div className="spinner-border" role="status"></div>
              <span className="fs-2 fw-bold ms-3">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

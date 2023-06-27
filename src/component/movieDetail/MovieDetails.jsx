import React, { useEffect } from 'react';
import './MovieDetails.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchShowsAsyncOrFetchMovieAsync,
  getSelectedMovieOrShow,
  removeMovieOrShow,
} from '../../features/slice/MoviesSlice';

export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchShowsAsyncOrFetchMovieAsync(imdbID));
    return () => {
      dispatch(removeMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <h3 className="text-light text-center">Loading ...</h3>
      ) : (
        <div className="d-flex justify-content-between p-0 my-4">
          <div className="col-md-7 text-light h-100">
            <div className="">
              <h4>{data.Title}</h4>
            </div>
            <div className="fs-6 my-3 details">
              <span className="me-2">
                IMDB Rating <i className="fa fa-star text-warning"></i> :{' '}
                {data.imdbRating}
              </span>
              <span className="me-2">
                IMDB Votes <i className="fa fa-thumbs-up text-light"></i> :{' '}
                {data.imdbVotes}
              </span>
              <span className="me-2">
                Runtime <i className="fa fa-film text-light"></i> :{' '}
                {data.Runtime}
              </span>
              <span className="me-2">
                Year <i className="fa fa-calendar  text-warning"></i> :{' '}
                {data.Released}
              </span>
            </div>
            <div className="plot mb-3">{data.Plot}</div>
            <div className="cast-content">
              <div className="">
                <span className="first">Director</span>{' '}
                <span className="second">{data.Director}</span>
              </div>
              <div className="">
                <span className="first">Stars</span>{' '}
                <span className="second">{data.Actors}</span>
              </div>
              <div>
                <span className="first">Genre</span>{' '}
                <span className="second">{data.Genre}</span>
              </div>
              <div>
                <span className="first">Country</span>{' '}
                <span className="second">{data.Country}</span>
              </div>
              <div>
                <span className="first">Languages</span>{' '}
                <span className="second">{data.Language}</span>
              </div>
              <div>
                <span className="first">Awards</span>{' '}
                <span className="second">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={data.Poster} className="card-img-top" alt="title" />
          </div>
        </div>
      )}
    </div>
  );
}

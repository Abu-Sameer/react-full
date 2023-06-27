import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div style={{ height: '550px' }} className="card cards text-light me-3">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          className="card-img-top"
          height="400px"
          alt="title"
        />
        <div className="card-body p-0 ps-2 pt-2 bg-">
          <h5>
            <span className="fs-6 fw-normal">Title: </span>
            {movie.Title}
          </h5>
          <h5>
            <span className="fs-6 fw-normal">Type: </span>
            {movie.Type}
          </h5>
        </div>
        <div className="card-footer border-light">
          Movie release: {movie.Year}
        </div>
      </div>
    </Link>
  );
}

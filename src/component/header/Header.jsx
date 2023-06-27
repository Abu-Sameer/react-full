import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './Header.scss';
import { useDispatch } from 'react-redux';
import {
  fetchMovieAsync,
  fetchShowsAsync,
} from '../../features/slice/MoviesSlice';

export default function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (term === '') {
      return alert('Please enter search');
    }
    dispatch(fetchMovieAsync(term));
    dispatch(fetchShowsAsync(term));
    setTerm('');
  }
  return (
    <div className="header d-flex justify-content-between align-items-center px-3 py-2">
      <div className="text-light fs-5 fw-bold">
        <Link to="/">Movie App </Link>
      </div>
      <form onSubmit={handleSubmit} className="input-group groups w-50">
        <input
          type="text"
          placeholder="Enter movie name"
          className="form-control text-light"
          aria-label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-light input-group-text px-3">
          <i className="fa-solid fa-search fs-5"></i>
        </button>
      </form>
      <div className="user-image">
        <img className="rounded-pill" width="50px" src={user} alt="user" />
      </div>
    </div>
  );
}

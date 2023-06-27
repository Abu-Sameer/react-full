import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/homee/Home';
import PageNotFound from './component/pageNotFound/PageNotFound';
import MovieDetails from './component/movieDetail/MovieDetails';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetails} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

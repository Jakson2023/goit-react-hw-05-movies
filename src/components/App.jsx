import { Link, Route, Routes } from 'react-router-dom';
import { NavLinkApp } from 'pages/pages.styled';
import Movie from 'pages/Movie';
import Home from 'pages/Home';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { lazy } from 'react';
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
export const App = () => {
  return (
    <div>
      <NavLinkApp>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </NavLinkApp>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

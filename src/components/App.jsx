import { Link, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>

        </Route>
        
      </Routes>
    </div>
  );
};

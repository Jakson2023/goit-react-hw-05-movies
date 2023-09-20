import { Link, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';

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
        <Route path="/movies/:movieId" />
        <Route path="/movies/:movieId/cast" />
        <Route path="/movies/:movieId/reviews" />
      </Routes>
    </div>
  );
};

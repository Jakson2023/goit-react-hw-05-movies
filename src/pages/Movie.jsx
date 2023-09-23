import { fetchSearch } from 'api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ListFilm } from './pages.styled';
export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState('');
  const location = useLocation();
  useEffect(() => {
    async function SearchMovie() {
      try {
        const searchListFilm = await fetchSearch(searchParams);
        setFoundMovies(searchListFilm);
      } catch (error) {
        console.error(error);
      }
    }
    SearchMovie();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputSearch = e.target.elements.input.value;
    setSearchParams({ query: inputSearch });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" />
        <button type="submit">Search </button>
      </form>
      <ListFilm>
        {foundMovies &&
          foundMovies.results.map(({ title, id }) => (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}{' '}
            </Link>
          ))}
      </ListFilm>
    </div>
  );
}

import { serviceReq } from 'api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListFilm } from './pages.styled';
export default function Home() {
  const [listFilms, setListFilms] = useState('');

  useEffect(() => {
    async function updateDate() {
      try {
        const filmTrendData = await serviceReq();
        setListFilms(filmTrendData);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
      }
    }
    updateDate();
  }, []);
  const location = useLocation()
  return (
    <div>
      <p>Trending today</p>
      <ListFilm>
        {listFilms &&
          listFilms.results.map(({ title, id }) => (
            <Link key={id} to={`movies/${id}`} state={{ from: location}}>
              {title}{' '}
            </Link>
          ))}
      </ListFilm>
    </div>
  );
}

import { serviceReq } from 'service/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListFilm, TitleTrending } from './pages.styled';

export default function Home() {
  const [listFilms, setListFilms] = useState('');
  const location = useLocation();
  useEffect(() => {
    async function updateDate() {
      try {
        const filmTrendData = await serviceReq();
        setListFilms(filmTrendData);
      } catch (error) {
        console.error('Error fetching', error);
      } finally {
      }
    }
    updateDate();
  }, []);

  return (
    <div>
      <TitleTrending>Trending today</TitleTrending>
      <ListFilm>
        {listFilms &&
          listFilms.results.map(({ title, id }) => (
            <Link key={id} to={`movies/${id}`} state={{ from: location }}>
              {title}{' '}
            </Link>
          ))}
      </ListFilm>
    </div>
  );
}

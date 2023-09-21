import { serviceReq } from 'api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div>
      <p>Trending today</p>
      <ul>
        {listFilms &&
          listFilms.results.map(({ title, id }) => (
            <Link key={id} to={`movies/${id}`}>
              {title}{' '}
            </Link>
          ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { fetchMovieId } from 'api';
import { Link, Outlet, useParams } from 'react-router-dom';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState('');

  useEffect(() => {
    async function movieInfo() {
      try {
        const movieData = await fetchMovieId(movieId);
        setDetailsFilm(movieData);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
      }
    }
    movieInfo();
  }, [movieId]);
  console.log(detailsFilm);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`}
          alt=""
          
        />
        <div>
          <p>{detailsFilm.original_title}</p>
          <p>{detailsFilm.vote_average}</p>
          <p>{detailsFilm.overview}</p>
          <p></p>
          <p>{}</p>
        </div>
        <ul>
          <li><Link to="cast">Cast</Link></li>
          <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
        
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { fetchMovieId } from 'api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  WrapperContent,
  GenresStyle,
  GenresTextStyle,
} from 'pages/pages.styled';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState('');
  const location = useLocation();

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
  const score = Math.round(detailsFilm.vote_average * 10);

  return (
    <div>
      <ul>
        <Link to={location.state.from}>GoBack</Link>
      </ul>
      <WrapperContent>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`}
          alt=""
          height={500}
        />
        <ul>
          <li>
            <p>
              {detailsFilm.original_title} ({detailsFilm.title})
            </p>
          </li>
          <li>
            <p>User Score: {score} %</p>
          </li>
          <li>
            <p>Owerview</p>
            <p>{detailsFilm.overview}</p>
          </li>

          <p>Genres</p>
          <GenresStyle>
            {detailsFilm &&
              detailsFilm.genres.map(item => (
                <GenresTextStyle key={item.id}>{item.name}</GenresTextStyle>
              ))}
          </GenresStyle>
        </ul>
      </WrapperContent>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

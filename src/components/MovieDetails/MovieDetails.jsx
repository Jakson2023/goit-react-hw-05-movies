import { useEffect, useRef, useState } from 'react';
import { fetchMovieId } from 'api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  WrapperContent,
  GenresStyle,
  GenresTextStyle,
  GenresTitleStyle,
  OwerviewWrap,
} from './movieDetails.styled';
import { Suspense } from 'react';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState('');
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);
  useEffect(() => {
    async function movieInfo() {
      try {
        const movieData = await fetchMovieId(movieId);
        setDetailsFilm(movieData);
      } catch (error) {
        console.error('Error fetching', error);
      } finally {
      }
    }
    movieInfo();
  }, [movieId]);
  const score = Math.round(detailsFilm.vote_average * 10);

  return (
    <div>
      <ul>
        <Link to={backLinkRef.current}>GoBack</Link>
      </ul>
      <WrapperContent>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`}
          alt=""
          height={500}
        />
        <OwerviewWrap>
          <li>
            <GenresTitleStyle>
              {detailsFilm.original_title} ({detailsFilm.title})
            </GenresTitleStyle>
          </li>
          <li>
            <p>User Score: {score} %</p>
          </li>
          <li>
            <GenresTitleStyle>Owerview</GenresTitleStyle>
            <p>{detailsFilm.overview}</p>
          </li>

          <GenresTitleStyle>Genres</GenresTitleStyle>
          <GenresStyle>
            {detailsFilm &&
              detailsFilm.genres.map(item => (
                <GenresTextStyle key={item.id}>{item.name}</GenresTextStyle>
              ))}
          </GenresStyle>
        </OwerviewWrap>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

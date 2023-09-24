import { useEffect, useRef, useState } from 'react';
import { fetchMovieId } from 'service/api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  WrapperContent,
  GenresStyle,
  GenresTextStyle,
  GenresTitleStyle,
  OwerviewWrap,
  GoBackLink,
  TitleStyle,
} from './movieDetails.styled';

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
  const date = new Date(detailsFilm.release_date);
  const year = date.getFullYear();

  return (
    <div>
      <Link to={backLinkRef.current}>
        <GoBackLink>GoBack</GoBackLink>
      </Link>
      <WrapperContent>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`}
          alt=""
          height={500}
        />
        <OwerviewWrap>
          <li>
            <TitleStyle>
              {detailsFilm.original_title} ({year})
            </TitleStyle>
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
      <GenresTitleStyle>Additional information</GenresTitleStyle>
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

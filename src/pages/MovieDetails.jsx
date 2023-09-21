import { useEffect, useState } from 'react';
import { fetchMovieId } from 'api';
import { useParams } from 'react-router-dom';
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
          src={`https://api.themoviedb.org/3/movie/${movieId}/images`}
          alt=""
          width={300}
          height={300}
        />
        <div>
          <p>{detailsFilm.original_title}</p>
          <p>{detailsFilm.vote_average}</p>
          <p>{detailsFilm.overview}</p>
          <p></p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}

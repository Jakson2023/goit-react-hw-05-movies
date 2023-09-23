import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ContainerImg,
  ImgActor,
  ContainerCast,
  CardActor,
} from './cast.styled';
export default function Cast() {
  const { movieId } = useParams();
  const [castDataInfo, setCastDataInfo] = useState('');
  useEffect(() => {
    async function movieCast() {
      try {
        const castData = await fetchCast(movieId);
        setCastDataInfo(castData);
        console.log(castData);
      } catch (error) {
        console.error('Error fetching', error);
      }
    }
    movieCast();
  }, [movieId]);

  return (
    <div>
      <ContainerCast>
        {castDataInfo &&
          castDataInfo.cast.map(
            ({ id, character, original_name, profile_path }) => (
              <CardActor key={id}>
                <ContainerImg>
                  <ImgActor
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt=""
                  />
                </ContainerImg>
                <li>
                  <p>{original_name}</p>
                  <p>{character}</p>
                </li>
              </CardActor>
            )
          )}
      </ContainerCast>
    </div>
  );
}

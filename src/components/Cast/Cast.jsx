import { fetchCast } from 'service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ContainerImg,
  ImgActor,
  ContainerCast,
  CardActor,
  ActorTitle,
} from './cast.styled';

const localImagePath = require('../images/ukraine.jpg');

export default function Cast() {
  const { movieId } = useParams();
  const [castDataInfo, setCastDataInfo] = useState('');
  useEffect(() => {
    async function movieCast() {
      try {
        const castData = await fetchCast(movieId);
        setCastDataInfo(castData);
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
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : `${localImagePath}`
                    }
                    alt="No Images"
                  />
                </ContainerImg>
                <li>
                  <ActorTitle>{original_name}</ActorTitle>
                  <p>{character}</p>
                </li>
              </CardActor>
            )
          )}
      </ContainerCast>
    </div>
  );
}

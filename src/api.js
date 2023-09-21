import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const serviceReq = async () => {
  const resp = await axios.get(`trending/movie/day`, {
    params: {
      api_key: '10a8ded0dacd9995ca514d21c19cfb90',
    },
  });

  return resp.data;
};

// 10a8ded0dacd9995ca514d21c19cfb90
export const fetchMovieId = async movie_id => {
  const resp = await axios.get(`movie/${movie_id}`, {
    params: {
      api_key: '10a8ded0dacd9995ca514d21c19cfb90',
    },
  });

  return resp.data;
};

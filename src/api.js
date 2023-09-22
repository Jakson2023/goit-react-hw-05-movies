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

export const fetchCast = async movie_id => {
  const resp = await axios.get(`movie/${movie_id}/credits`, {
    params: {
      api_key: '10a8ded0dacd9995ca514d21c19cfb90',
    },
  });

  return resp.data;
};
export const fetchReview = async movie_id => {
  const resp = await axios.get(`movie/${movie_id}/reviews`, {
    params: {
      api_key: '10a8ded0dacd9995ca514d21c19cfb90',
    },
  });

  return resp.data;
};

export const fetchSearch = async search => {
  const resp = await axios.get(`search/movie?${search}`, {
    params: {
      api_key: '10a8ded0dacd9995ca514d21c19cfb90',
    },
  });

  return resp.data;
};

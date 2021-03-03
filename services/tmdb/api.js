import axiosBase from 'axios'

const axios = axiosBase.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.TMDB_API_KEY
    }
});

export const getMoviesBySearchTerm = async search => {
  const response = await axios.get(`/search/movie`, {params: {query: search}})

  if (response.status !== 200) {
    throw new Exception('Request failed', response);
  }

  return {
    page: response.data.page,
    total_pages: response.total_pages,
    data: response.data.results
};
}

export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);

  if (response.status !== 200) {
    throw new Exception('Request failed', response);
  }

  return response.data;
}

export const getTrendingMovies = async (timeWindow) => {
  const response = await axios.get(`/trending/movie/${timeWindow}`);

  if (response.status !== 200) {
      throw new Exception('Request failed', response);
  }

  return {
      page: response.data.page,
      total_pages: response.total_pages,
      data: response.data.results
  };
}

export const getUpcomingMovies = async (page = 1) => {
    const response = await axios.get('/movie/upcoming', { params: { page } });

    if (response.status !== 200) {
        throw new Exception('Request failed', response);
    }

    return {
        page: response.data.page,
        total_pages: response.total_pages,
        data: response.data.results
    };
}

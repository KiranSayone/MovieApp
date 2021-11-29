const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

const TMDB_API_KEY = 'faab07de80045c112ff97eb3af1e941d';

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: '/movie/now_playing',
  UPCOMING_MOVIES: '/movie/upcoming',
  GENRES: '/genre/movie/list',
  SEARCH: '/search/movie',
};

export {TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, TMDB_API_KEY, ENDPOINTS};

export const API_KEY = "e96d95e8f9e20aeb09be4621a9820d5f"; //import.meta.env.VITE_APP_TMDB_API_KEY;

export const IMAGE_LINK = "https://image.tmdb.org/t/p/w500";
export const IMAGE_UNAVAILABLE_PLACEHOLDER="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
export const TEST_PROGRAM_ID = "2a768655-3df9-4da5-ac68-0c9057175aa1";
export const LL_CLIENT_ID = "LQumORAnK8bCIDlUZUFOXrfYa7t4JdO3yUGhNwEw";
export const TEST_ENDPOINT = "https://cf-blast.livelikecdn.com/api/v1/";
export const TEST_ROOM_ID = "8be456ea-2358-46e5-97fd-59617ea2f03c";
export const TEST_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzYWM0Njg1LWZkZGQtNGU3Yy04YTAzLTVkODZmYWE4N2ZhYSIsImNsaWVudF9pZCI6IkxRdW1PUkFuSzhiQ0lEbFVaVUZPWHJmWWE3dDRKZE8zeVVHaE53RXciLCJpc3MiOiJibGFzdHJ0IiwiYWNjZXNzX3Rva2VuIjoiYjIzYTg5ZDRlZDQ0ZDQwYjMwNWE2MDk4OGMxYzdkNzA2YmJhZjFhYSIsImlhdCI6MTY3MDE5MjY4M30.IKGYjrjNYx6wk4LIGT8XraeqyYcUbib6OH1JmbflBTY";
export const TRENDINGS = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`;

export const LATEST = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;

export const MOVIE_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const TV_GENRES = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;

export const TV_SHOWS=(pageNumber=1) => `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;

export const FILTERED_MOVIES_WITH_GENRES=(pageNumber=1,id)=>`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${id}&with_watch_monetization_types=flatrate`

export const FILTERED_TV_SHOWS_WITH_GENRES=(pageNumber=1,id)=>`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`


export const SEARCH_MOVIES=(pageNumber=1,query="")=>`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`
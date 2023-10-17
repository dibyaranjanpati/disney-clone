import axios, { Axios } from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "2ec0d66f5bdf1dd12eefa0723f1479cf";

const movieBaseGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const getTrendingVidios = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieBaseGenreBaseURL + "&with_genres=" + id);

export default { getTrendingVidios, movieBaseGenreBaseURL, getMovieByGenreId };

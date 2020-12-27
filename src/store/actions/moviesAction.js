import { GET_POPULER_MOVIES, GET_GENRE_IDS, GET_MOVIE_TOP_RATED, GET_SEARCH_MOVIE, GET_UPCOMING_MOVIE } from "../types";
import axios from "axios";

const api = "https://api.themoviedb.org/3/";
const apiKey = "27359f6ab80a87d204461de63158f3bb";


export function getPopulerMovies (page) {
  return function(dispatch) {
     axios.get(`${api}movie/popular?api_key=${apiKey}&language=tr-TR`, {
      params: {
        page: page
      }
    })
    .then(response => {
      dispatch({
        type: GET_POPULER_MOVIES,
        payload: response.data
      });
    })
  };
}

export const getGenreIds = () => async dispatch => {
  await axios.get(`${api}genre/movie/list?api_key=${apiKey}&language=tr-TR`)
  .then(response => {
    dispatch({
      type: GET_GENRE_IDS,
      payload: response.data.genres
    });
  })
};

export function getMovieTopRated() {
  return function(dispatch) {
     axios.get(`${api}movie/top_rated?api_key=${apiKey}&language=tr-TR`)
    .then(response => {
      dispatch({
        type: GET_MOVIE_TOP_RATED,
        payload: response.data
      });
    })
  };
}

export function getSearchMovie(query, page) {
  return function(dispatch) {
     axios.get(`${api}search/movie?api_key=${apiKey}&query=${query}&page=${page}&language=tr-TR`, {
      params: {
        query: query,
        page: page
      }
    })
    .then(response => {
      dispatch({
        type: GET_SEARCH_MOVIE,
        payload: response.data
      });
    })
  };
}


export const getUpComingMovie = () => async dispatch => {
  axios.get(`${api}movie/upcoming?api_key=${apiKey}&language=tr-TR&region=tr`)
  .then(response => {
    dispatch({
      type: GET_UPCOMING_MOVIE,
      payload: response.data
    });
  })
};

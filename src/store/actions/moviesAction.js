import axios from 'axios';

import ActionTypes from '../actionsTypes';

const api = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

const getPopulerMovies = (page) => {
  return async function (dispatch) {
    try {
      await axios.get(`${api}movie/popular?api_key=${apiKey}&language=tr-TR`,
        {
          params: {
            page: page
          }
        })
        .then(response => {
          dispatch({ type: ActionTypes.movies.GET_POPULER_MOVIES, payload: response.data });
        })
    } catch (err) {
    }
  }
};

const getGenreIds = () => {
  return async function (dispatch) {
    await axios.get(`${api}genre/movie/list?api_key=${apiKey}&language=tr-TR`)
      .then(response => {
        dispatch({ type: ActionTypes.movies.GET_GENRE_IDS, payload: response.data.genres });
      })
  }
}

const getMovieTopRated = () => {
  return async function (dispatch) {
    await axios.get(`${api}movie/top_rated?api_key=${apiKey}&language=tr-TR`)
      .then(response => {
        dispatch({ type: ActionTypes.movies.GET_MOVIE_TOP_RATED, payload: response.data });
      })
  };
}

const getSearchMovie = (query, page) => {
  return async function (dispatch) {
    try {

      await axios.get(`${api}search/movie?api_key=${apiKey}&page=${page}&language=tr-TR&query=${query}`, {
        params: {
          page
        }
      })
        .then(response => {
          dispatch({
            type: ActionTypes.movies.GET_SEARCH_MOVIE,
            payload: response.data
          });
        })
    } catch (err) {

    }
  };
}


const getUpComingMovie = () => async dispatch => {
  axios.get(`${api}movie/upcoming?api_key=${apiKey}&language=tr-TR&region=tr`)
    .then(response => {
      dispatch({
        type: ActionTypes.movies.GET_UPCOMING_MOVIE,
        payload: response.data
      });
    })
};

const moviesAction = {
  getPopulerMovies,
  getGenreIds,
  getMovieTopRated,
  getSearchMovie,
  getUpComingMovie
}

export default moviesAction;

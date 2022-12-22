import axios from 'axios';

import ActionTypes from '../actionsTypes';

const api = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

const getMovieById = (id) => {
  return async function (dispatch) {
    await axios.get(`${api}movie/${id}?api_key=${apiKey}&language=tr-TR`, {
      params: {
        id
      }
    })
      .then(response => {
        dispatch({
          type: ActionTypes.movies.GET_MOVIE_BY_ID,
          payload: response.data
        });
      })
  };
}

const moviesDetailAction = {
  getMovieById
}

export default moviesDetailAction;

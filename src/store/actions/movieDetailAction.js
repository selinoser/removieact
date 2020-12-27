import { GET_MOVIE_BY_ID } from "../types";
import axios from "axios";

const api = "https://api.themoviedb.org/3/";
const apiKey = "27359f6ab80a87d204461de63158f3bb";


export function getMovieById (id) {
  return function(dispatch) {
     axios.get(`${api}movie/${id}?api_key=${apiKey}&language=tr-TR`, {
      params: {
        id: id
      }
    })
    .then(response => {
      dispatch({
        type: GET_MOVIE_BY_ID,
        payload: response.data
      });
    })
  };
}

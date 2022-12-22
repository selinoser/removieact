import { combineReducers } from 'redux';

import movieDetailReducer from './movieDetailReducer';
import movieReducer from './movieReducer';

const reducers = combineReducers(
  {
    movies: movieReducer,
    movieById: movieDetailReducer
  }
)

export default reducers;
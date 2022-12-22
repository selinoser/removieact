import ActionTypes from '../actionsTypes';

const initialState = {
    populerMovies: [],
    genreIds: [],
    movieTopRated: null,
    searchMovie: [],
    upcomingMovies: []
};

const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.movies.GET_POPULER_MOVIES:
            return {
                ...state,
                populerMovies: action.payload,
                page: 1
            }
        case ActionTypes.movies.GET_GENRE_IDS:
            return {
                ...state,
                genreIds: action.payload
            }
        case ActionTypes.movies.GET_MOVIE_TOP_RATED:
            return {
                ...state,
                movieTopRated: action.payload
            }
        case ActionTypes.movies.GET_SEARCH_MOVIE:
            return {
                ...state,
                searchMovie: action.payload
            }
        case ActionTypes.movies.GET_UPCOMING_MOVIE:
            return {
                ...state,
                upcomingMovies: action.payload
            }
        default: return state
    }
};

export default movieReducer;
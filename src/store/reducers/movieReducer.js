import { GET_POPULER_MOVIES, GET_GENRE_IDS, GET_MOVIE_TOP_RATED, GET_SEARCH_MOVIE, GET_UPCOMING_MOVIE } from '../types';

const initialState = {
    populerMovies:[],
    genreIds: [],
    page : 1,
    query : null,
    movieTopRated : null,
    searchMovie: [],
    upcomingMovies : [],
    loading:true
};

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POPULER_MOVIES:
        return {
            ...state,
            populerMovies:action.payload,
            page:1,
            loading:false

        }
        case GET_GENRE_IDS:
        return {
            ...state,
            genreIds:action.payload,
            loading:false
        }
        case GET_MOVIE_TOP_RATED:
        return {
            ...state,
            movieTopRated: action.payload,
            loading: false
        }
        case GET_SEARCH_MOVIE:
        return {
            ...state,
            searchMovie: action.payload,
            page:1,
            loading: false
        }
        case GET_UPCOMING_MOVIE:
        return {
            ...state,
            upcomingMovies: action.payload,
            loading: false
        }
        default: return state
    }
};

export default movieReducer;
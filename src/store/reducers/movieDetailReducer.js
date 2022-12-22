import ActionTypes from '../actionsTypes';

const initialState = {
    movieById: null
}

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.movies.GET_MOVIE_BY_ID:
            return {
                ...state,
                movieById: action.payload
            }
        default: return state
    }
}

export default movieDetailReducer;
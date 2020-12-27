import { GET_MOVIE_BY_ID} from '../types'

const initialState = {
    movieById : null,
    loading: true
}

const movieDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIE_BY_ID:
        return {
            ...state,
            movieById: action.payload,
            loading: false
        }
        default: return state
    }
}

export default movieDetailReducer;
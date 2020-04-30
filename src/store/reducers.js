const initialStatus = {
    movies: [],
    loading: false,
    error: null,
    movie: {}
}

const reducers = (state = initialStatus, action) => {
    switch(action.type) {
        case "SET_MOVIES": 
        console.log('masuk setMovies')
            return {
                ...state,
                movies: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "SET_ERROR": 
            return {
                ...state,
                error: action.payload
            }
        case "SET_MOVIE":
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default reducers
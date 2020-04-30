import axios from 'axios'

export const setMovies = (value) => {
    return {
        type: "SET_MOVIES",
        payload: value
    }
}

export const setLoading = (value) => {
    return {
        type: "SET_LOADING",
        payload: value
    }
}

export const setError = (value) => {
    return {
        type: "SET_ERROR",
        payload: value
    }
}

export const setMovie = (value) => {
    return {
        type: "SET_MOVIE",
        payload: value
    }
}

export const fetchMovies = (value) => {
    return function(dispatch) {
        dispatch(setLoading(true))
        axios({
            method: 'get',
            url: "https://www.omdbapi.com/",
            params: {
                apiKey: value.apiKey,
                s: value.s
            }
        })
            .then(({ data }) => {
                // console.log(data.Search)
                dispatch(setMovies(data.Search))
            })
            .catch(({ response }) => {
                console.log(response)
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}
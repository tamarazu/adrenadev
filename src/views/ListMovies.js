import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchMovies } from '../store/actions'
import { Image, Row } from 'react-bootstrap'

import CardMovie from '../components/CardMovie'
import Loading from '../components/Loading'

export default function ListMovies() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.reducers.movies)
    const loading = useSelector(state => state.reducers.loading)

    useEffect(() => {
        dispatch(fetchMovies({
            apiKey: 'b445ca0b',
            s: 'avenger'
        }))
    }, [])

    if(loading) return <Loading/>
    return(
        <div>
            <Image src="https://cdn.collider.com/wp-content/uploads/2011/12/the-avengers-movie-poster-banners-04.jpg" fluid />
            <div>
                <h1 className="display-4 textBanner">News banner text preview</h1>
            </div>
            <Row className="d-flex justify-content-center m-3">
                {movies.map(movie => 
                    <CardMovie movie={movie}/>
                )}
            </Row>
        </div>
    )
}
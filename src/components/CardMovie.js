import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {Col, Image, Row} from 'react-bootstrap'
import { setMovie } from '../store/actions'

import Loading from '../components/Loading'

export default function CardMovie(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const movie = props.movie

    const loading = useSelector(state => state.reducers.loading)

    const detailButton = ( event) => {
        // console.log(movie)
        dispatch(setMovie(movie))
        history.push('/movie')
    }

    if(loading) return <Loading/>
    return (
        <div className="m-3" style={{position: "relative"}}>
                <div className="color-overlay"></div>
                <Image src={movie.Poster} rounded style={{height: '450px'}}/>
                <Row style={{padding: '5px', marginTop: '-32px'}}>
                    <Col className="col-10">
                        <p className="titleMovieList">{movie.Title}</p>
                    </Col>
                    <Col classsName="col-2">
                        <i 
                        className="fas fa-chevron-circle-right fa-lg"
                        onClick={(event) => detailButton(event)}
                        style={{color: "#f1f1f1"}}
                        ></i>
                    </Col>
                </Row>
        </div>
    )
}
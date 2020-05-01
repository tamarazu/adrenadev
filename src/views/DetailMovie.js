import React from 'react'
import { useSelector } from 'react-redux'
import { Image, Row, Col } from 'react-bootstrap'

import Navbar from '../components/Navbar'

export default function DetailMovie() {
    const movie = useSelector(state => state.reducers.movie)
    console.log(movie)

    return (
        <div>
            <Navbar/>
            <div  className="detailCard container">
                <Row className="d-flex justify-content-center">
                    <Col style={{float: 'right'}}>
                        <Image className="imgDetail" src={movie.Poster} fluid />
                    </Col>
                    <Col>
                        <h1
                            // className="display-4"
                            style={{marginBottom: '41px', fontFamily: "Muli", fontWeight: 'Bold'}}
                        >{movie.Title}</h1>
                        <h3 style={{marginBottom: '30px', fontWeight: 'bold'}}>{movie.Year}, {movie.Type}</h3>
                        {/* <h3 style={{marginBottom: '30px', fontWeight: 'bold'}}></h3> */}
                        <h5 style={{marginBottom: '30px', fontWeight: 'bold'}}>Description</h5>
                        <p style={{fontSize: '20px'}}>Ketika musuh yang tak terduga muncul, mengancam keselamatan dan keamanan dunia, Nick Fury, direktur Badan Perdamaian Internasional, dikenal sebagai S.H.I.E.L.D. , membutuhkan tim untuk menyelamatkan dunia dari bencana. Usaha perekrutan pun dimulai Iron Man, Captain America, Hulk, Thor, Black Widow dan Hawkeye dikumpulkan untuk menaklukkan Dewa Kehancuran, Loki, dalam usahanya menghancurkan bumi. Dengan semua gabungan kekuatan, tugas nampak lebih mudah. Namun kenyatannya tidak demikian! Para pahlawan super justru saling melawan satu sama lain Hulk melawan Captain America, siapa yang akan menang? Apakah Iron Man dapat mengalahkan kekuatan super milik Thor? Bagaimana para pahlawan super ini secara bersama-sama menghadapi bencana, melindungi masyarakat dan yang terpenting, bertahan hidup?</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
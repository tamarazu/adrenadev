import React from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'react-bootstrap'

export default function Navbar() {
    const movie = useSelector(state => state.reducers.movie)

    return (
        <div className="navbar-movie m-3">
            <Nav>
            <Nav.Item>
                <Nav.Link href="/" style={{color: 'black'}}>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'black'}}><i 
                className="fas fa-chevron-right fa-sm"
                style={{color: "black", alignItems:'center'}}
                ></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{color: 'black'}}>{movie.Title}</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}
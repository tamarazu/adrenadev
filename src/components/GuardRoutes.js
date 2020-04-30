import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import ListMovies from '../views/ListMovies'
import DetailMovie from '../views/DetailMovie'

export default function GuardRoutes () {
    return (
        <Router>
            <Switch>
                <Route path="/movie">
                    <DetailMovie/>
                </Route>
                <Route path="/">
                    <ListMovies/>
                </Route>
            </Switch>
        </Router>
    )
}
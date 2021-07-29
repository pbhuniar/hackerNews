import React from 'react'
import {Link} from 'react-router-dom'
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom'

import Login from '../Component/Auth/LogIn/LogIn'
import Registration from '../Component/Auth/Registration/Registration'
import Home from '../Component/Home/Home'

import Header from '../Component/Layout/Header/Header'
import Footer from '../Component/Layout/Footer/Footer'

export default function Routes() {
    return (
        <div>
                <Router>
                        <Header/>
                        <Switch>    
                                    <Route path="/Home" component={Home}></Route>
                                    <Route path="/LogIn" component={Login}></Route>
                                    <Route path="/Registration" component={Registration}></Route>

                        </Switch>

                </Router>
        </div>
    )
}

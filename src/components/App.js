import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
import Home from '@/modules/home/home'
import User from '@/modules/user/user'

export default class App extends Component {
    render() {
        return (
            <Router>
                {/* <Header></Header> */}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                </Switch>
                <Footer></Footer>
            </Router>
        )
    }
}

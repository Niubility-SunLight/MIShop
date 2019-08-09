import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
import Home from '@/modules/home/home'
import User from '@/modules/user/user'
import Login from '@/modules/login/login'
import routers from '@/router/router'
class App extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        let routersList = routers.map((route, index) => {
            // return <Route key={index} path={route.path} exact render={props =>(<route.component {...props} />)} />
            return <Route key={index} path={route.path}  component={route.component} />
        })
        return (
            <Router>
                <Header></Header>
                <Switch>
                    {routersList}
                    {/* <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} /> */}
                </Switch>
                {/* <Footer></Footer> */}
            </Router>
        )
    }
}
export default App
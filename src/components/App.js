import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
import routers from '@/router/router'
class App extends Component {
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
                </Switch>
                <Footer></Footer>
            </Router>
        )
    }
}
export default App
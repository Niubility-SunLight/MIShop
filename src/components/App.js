import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
import routers from '@/router/router'

class App extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <Switch>
                    {
                        routers.map((route, index) => {
                            // return <Route key={index} path={route.path} exact render={props =>(<route.component {...props} />)} />
                            return <Route key={index} path={route.path} component={route.component} />
                        })
                    }
                </Switch>
                <Footer></Footer>
            </Router>
        )
    }
}
export default App
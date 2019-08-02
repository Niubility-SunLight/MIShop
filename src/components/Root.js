import React, { Component } from 'react'
import Header from './header/header'
import Footer from './footer'
class Root extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}
export default Root
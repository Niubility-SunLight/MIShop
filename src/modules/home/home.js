import React, { Component } from 'react'
import CSS from "./home.module.scss"
import Header from "./header";
export default class Home extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <Header></Header>
            </div>
        )
    }
}

import React, { Component } from 'react'
import CSS from "./search.module.scss"
import Header from "./components/header"
import Content from "./components/content"
export default class componentName extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.appSearchPage}>
                    <Header></Header>
                    <Content></Content>
                </div>
            </div>
        )
    }
}

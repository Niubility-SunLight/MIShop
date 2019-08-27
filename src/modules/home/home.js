import React, { Component } from 'react'
import CSS from "./home.module.scss"
import Header from "./components/header";
import Content from "./components/content"
import {section} from "./data";
console.log(section)
export default class Home extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <Header></Header>
                <Content section={section}></Content>
            </div>
        )
    }
}

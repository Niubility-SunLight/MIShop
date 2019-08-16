import React, { Component } from 'react'
import CSS from "./navBarLeft.module.scss";
export default class NavBarLeft extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    render() {
        let list = this.props.list.map((value, index) => {
            return (<li className={CSS.navItem} key={index}>
                {value.category_name}
            </li>)
        })
        return (
            <ul className={CSS.container}>
                {list}
            </ul>
        )
    }
}

import React, { Component } from 'react'
import CSS from "./header.module.scss"
export default class Header extends Component {
    render() {
        return (
            <div className={CSS.headerContainer}>
                <div className="app-header-left">
                    <a href="javascript:;">
                        <i className="image-icons app-header-icon icon-back"></i>
                    </a>
                </div>
                <div className="app-header-middle">
                    <p className={CSS.appHeaderTitle}>购物车</p>
                </div>
                <div className="app-header-right">
                <a href="javascript:;">
                        <i className="image-icons app-header-icon icon-search"></i>
                    </a>
                </div>
            </div>
        )
    }
}

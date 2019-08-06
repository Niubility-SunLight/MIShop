import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import CSS from "./footer.module.scss"
export default class Footer extends Component {

    render() {
        return (
            <div className={CSS.container}>
                <NavLink to="/home" className={CSS.navLink} activeClassName={CSS.activeNavLink}>
                    <i className={CSS.home} ></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/home" className={CSS.navLink} activeClassName={CSS.activeNavLink}>
                    <i className={CSS.type}></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to="/home" className={CSS.navLink} activeClassName={CSS.activeNavLink}>
                    <i className={CSS.shopCar}></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/user" className={CSS.navLink} activeClassName={CSS.activeNavLink}>
                    <i className={CSS.mine}></i>
                    <span>我的</span>
                </NavLink>
            </div>
        )
    }
}

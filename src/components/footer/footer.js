import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'


import CSS from "./footer.module.scss"
class Footer extends Component {

    render() {
        const { location: { pathname } } = this.props
        const hideHeaderPath = ['/login']
        const hideHeader = hideHeaderPath.includes(pathname.trim())
        const isShowHeader = hideHeader ? false : true
        let navLinkList = [{ url: "/home", text: "首页", css: CSS.home }, { url: "/category", text: "分类", css: CSS.type }, { url: "/cart", text: "购物车", css: CSS.shopCar }, { url: "/user", text: "我的", css: CSS.mine }].map((value, index) => {
            return <NavLink to={value.url} className={CSS.navLink} activeClassName={CSS.activeNavLink} key={index}>
                <i className={CSS.home} ></i>
                <span>{value.text}</span>
            </NavLink>
        })
        return (
            <div>
                {isShowHeader ? <div className={CSS.container}>
                    {navLinkList}
                </div> : false}
            </div>

        )
    }
}
export default withRouter(Footer)

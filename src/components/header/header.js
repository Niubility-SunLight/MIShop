import React, { Component } from 'react'
import CSS from "./header.module.scss"
import {withRouter} from 'react-router-dom'

class Header extends Component {
    render() {
        const { location: { pathname } } = this.props
        const hideHeaderPath = ['/user','/login','/home']
        const hideHeader = hideHeaderPath.includes(pathname.trim())
        const isShowHeader =  hideHeader ? false : true
        return (
            <div className={!isShowHeader?`${CSS.headerContainer} hd-animateOut`:`${CSS.headerContainer} hd-animateIn`}>
                <div className="app-header-left">
                    <div>
                        <i className="image-icons app-header-icon icon-back"></i>
                    </div>
                </div>
                <div className="app-header-middle">
                    <p className={CSS.appHeaderTitle}>购物车</p>
                </div>
                <div className="app-header-right">
                    <div>
                        <i className="image-icons app-header-icon icon-search"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
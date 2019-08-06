import React, { Component } from 'react'
import CSS from "./header.module.scss"
import {withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        const { location: { pathname } } = this.props
        const hideHeaderPath = ['/user','/login']
        const hideHeader = hideHeaderPath.includes(pathname.trim())
        const isShowHeader =  hideHeader ? false : true
        console.log(isShowHeader)
        return (
            <div className={!isShowHeader?`${CSS.headerContainer} hd-animateOut`:`${CSS.headerContainer} hd-animateIn`}>
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
export default withRouter(Header)
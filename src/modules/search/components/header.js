import React, { Component } from 'react'
import CSS from "./header.module.scss"
import { withRouter } from "react-router-dom"
class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    goToBack() {
        this.props.history.goBack()
    }
    render() {

        return (
            <div className={CSS.container}>
                <div className={CSS.appSearchLeft} onClick={(e) => this.goToBack(e)}>
                    <i className="image-icons app-header-icon icon-back"></i>
                </div>
                <div className={CSS.searchItem}>
                    <input type="text" placeholder="搜索商品名称" />
                </div>
                <div className={CSS.appSearchRight}>
                    <i className="image-icons app-header-icon icon-search"></i>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)

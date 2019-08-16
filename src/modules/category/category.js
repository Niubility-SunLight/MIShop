import React, { Component } from 'react'
import Scroll from "@/components/scroll/scroll"
import CSS from "./category.module.scss"
import NavBarLeft from "./navBarLeft"
import GoodsItem from "./goodsItem"

import dataList from "./data";

import PropTypes from 'prop-types'
console.log(dataList)


class Category extends Component {
    constructor(props) {
        super(props)
        
    }
    state = {
        refreshScroll: false,
        dataList : dataList
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.listNavBar}>
                    <Scroll>
                        <NavBarLeft list = {this.state.dataList}></NavBarLeft>
                    </Scroll>
                </div>
                <div className={CSS.listGoodsItem}>
                    <Scroll>
                        <GoodsItem list = {this.state.dataList}></GoodsItem>
                    </Scroll>
                </div>
            </div>
        )
    }
}

Category.propTypes = {

}

export default Category
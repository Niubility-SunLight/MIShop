import React, { Component } from 'react'
import Scroll from "@/components/scroll/scroll"
import CSS from "./category.module.scss"
import NavBarLeft from "./navBarLeft"
import GoodsItem from "./goodsItem"

import dataList from "./data";



class Category extends Component {
    constructor(props) {
        super(props)
        this.state={
            refreshScroll: false,
            dataList: dataList,
            goodsList: null,
            activeNavBarIndex: 0
        }
    }
    componentDidMount() {
        this.setState({ goodsList: this.refs.goodsItem.refs.goodsItemList.childNodes })
    }
    scrollComponentY(e) {
        if (this.state.goodsList) {
            for (let elemenet of this.state.goodsList) {
                if ((this.refs.goodsItemScroll.refs.scrollView.offsetHeight / 2 > elemenet.offsetHeight || elemenet.offsetHeight < this.refs.goodsItemScroll.refs.scrollView.offsetHeight / 2 - 50) && (Math.abs(e.y) < (elemenet.offsetTop + elemenet.offsetHeight))) {
                    this.setState({ activeNavBarIndex: Number(elemenet.dataset.index) })
                    this.scrollToGoodsItem()
                    return
                } else if (Math.abs(e.y) < ((elemenet.offsetTop + elemenet.offsetHeight) - this.refs.goodsItemScroll.refs.scrollView.offsetHeight / 3)) {
                    this.setState({ activeNavBarIndex: Number(elemenet.dataset.index) })
                    this.scrollToGoodsItem()
                    return
                }
            }
        }
    }

    scrollToGoodsItem(e) {
        let elementList = this.refs.navBarScroll.scrollView.childNodes[0].childNodes
        for (let elemenet of elementList) {
            if (elemenet.classList.value.indexOf("navItemActive") !== -1) {
                if (elemenet.offsetHeight + elemenet.offsetTop > this.refs.navBarScroll.scrollView.offsetHeight) {
                    this.refs.navBarScroll.bScroll.scrollTo(0, -(elemenet.offsetHeight + elemenet.offsetTop - this.refs.navBarScroll.scrollView.offsetHeight), 500)
                } else if (elemenet.offsetHeight + elemenet.offsetTop < this.refs.navBarScroll.scrollView.offsetHeight) {
                    this.refs.navBarScroll.bScroll.scrollTo(0, 0, 500)
                }
                return
            }
        }
    }
    toGoodsItemY(e) {
        let goodsListItem = this.refs.goodsItem.refs.goodsItemList.childNodes
        this.refs.goodsItemScroll.bScroll.scrollTo(0, -goodsListItem[e.target.dataset.index].offsetTop, 500)
    }
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.listNavBar}>
                    <Scroll ref="navBarScroll">
                        <NavBarLeft list={this.state.dataList} onclick={this.toGoodsItemY.bind(this)} activeNavBarIndex={this.state.activeNavBarIndex} scrollToGoodsItem={this.scrollToGoodsItem.bind(this)}></NavBarLeft>
                    </Scroll>
                </div>
                <div className={CSS.listGoodsItem}>
                    <Scroll ref="goodsItemScroll" onScroll={this.scrollComponentY.bind(this)}>
                        <GoodsItem list={this.state.dataList} ref="goodsItem"></GoodsItem>
                    </Scroll>
                </div>
            </div>
        )
    }
}


export default Category
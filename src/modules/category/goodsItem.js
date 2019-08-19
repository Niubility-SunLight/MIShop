import React, { Component } from 'react'
import CSS from "./goodsItem.module.scss";
function GoodsComponents(props) {
    return (
        props.list.map((group, groupIndex) => {
            return (<div data-index={groupIndex} className={CSS.goodsItemMain} key={groupIndex}>
                {
                    group.category_list && group.category_list.map((value, index) => {
                        if (value.view_type === "cells_auto_fill") {
                            return (
                                <div className={CSS.cellMainImg} key={index}>
                                    <img style={value.body.h===80?{height:"0.8rem"}:{}} src={value.body.items[0].img_url} alt="" />
                                </div>
                            )
                        } else if (value.view_type === "category_title") {
                            return (
                                <div className={CSS.categoryTitle} key={index}>
                                    <span>
                                        {value.body.category_name}
                                    </span>
                                </div>
                            )
                        } else if (value.view_type === "category_group") {
                            return (<div className={CSS.categoryGroup}  key={index}>
                                {
                                    value.body.items.map((product, productIndex) => {
                                        return (
                                            <div className={CSS.product} key={productIndex}>
                                                <div className={CSS.productImg}>
                                                    <img src={product.img_url} alt="" />
                                                </div>
                                                <p>{product.product_name}</p>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            )
                        }
                    })
                }
            </div>)
        })
    )
}

class goodsItem extends Component {
    render() {
        return (
            <div className={CSS.componentListMain} ref="goodsItemList">
                <GoodsComponents list={this.props.list}></GoodsComponents>
            </div>

        )
    }
}

export default goodsItem
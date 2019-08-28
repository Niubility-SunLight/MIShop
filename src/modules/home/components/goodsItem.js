import React, { Component } from 'react'
import CSS from "./goodsItem.module.scss"

export default class GoodsItem extends Component {
    render() {
        return (
            <div className={CSS.listTwoType}>
                <div className={CSS.goodsItem}>
                    <div className={CSS.imgWrapper}>
                        <img src="" alt="" />
                    </div>
                    <div className={CSS.goodsInfo}>
                        <div className={CSS.name}>小米MIX 2S</div>
                        <div className={CSS.brief}>四曲面陶瓷机身，骁龙845</div>
                        <div className={CSS.price}></div>
                        <div className={CSS.buyBtn}></div>
                    </div>
                </div>

            </div>
        )
    }
}

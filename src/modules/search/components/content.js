import React, { Component } from 'react'
import CSS from "./content.module.scss"
export default class componentName extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.searchPromotion}>
                    <div className={CSS.searchPromotionTtile}>热门搜索</div>
                    <div className={CSS.searchPromotionList}>
                        <div className={CSS.itemList}>
                            <div className={CSS.item}>
                                
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

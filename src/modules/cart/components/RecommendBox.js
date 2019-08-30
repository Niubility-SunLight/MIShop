import React, { Component } from 'react'
import CSS from "./RecommendBox.module.scss";
export default class RecommendBox extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className={CSS.RecommendBox}>
                <div className={CSS.RecommendTopImg}>
                    {
                        this.props.data.header.body.items.map((ele, index) => {
                            return (
                                <img src={ele.img_url} alt="" key={index}/>
                            )
                        })
                    }

                </div>
                <div className={CSS.RecommendList}>
                    {
                        this.props.data.recom_list.map((ele, index) => {
                            return (
                                <div className={CSS.listTwoType1} key={index}>
                                    <div className={CSS.goodsItem} key={index}>
                                        <div className={CSS.imgWrapper}>
                                            <img src={ele.image_url} alt="" />
                                        </div>
                                        <div className={CSS.goodsInfo}>
                                            <div className={CSS.name}>{ele.name}</div>
                                            <div className={CSS.price}>
                                                {ele.price}
                                                <span className={CSS.oldPrice}><s>{ele.market_price}</s></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        )
    }
}

import React, { Component } from 'react'
import CSS from "./goodsItem.module.scss"

function ListTwoType13(props) {
    return (
        <div className={CSS.listTwoType13} style={{ background: `${props.data.item.body.bg_color}` }}>
            {
                props.data.item.body.items.map((ele, index) => {
                    return (
                        <div className={CSS.goodsItem} key={index}>
                            <div className={CSS.imgWrapper}>
                                <img style={props.style} src={ele.img_url} alt="" />
                            </div>
                            <div className={CSS.goodsInfo}>
                                <div className={CSS.name}>{ele.product_name}</div>
                                <div className={CSS.brief}>{ele.product_brief}</div>
                                <div className={CSS.price}>
                                    {ele.product_price}
                                    <span>起</span>
                                    <span className={CSS.oldPrice}><s>{ele.product_org_price}</s></span>
                                </div>
                                <div className={CSS.buyBtn}>立即购买</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function ListTwoType1(props) {
    return (
        <div className={CSS.listTwoType1} style={{ background: `${props.data.item.body.bg_color}` }}>
            {
                props.data.item.body.items.map((ele, index) => {
                    return (
                        <div className={CSS.goodsItem} key={index}>
                            <div className={CSS.imgWrapper}>
                                <img style={props.style} src={ele.img_url} alt="" />
                            </div>
                            <div className={CSS.goodsInfo}>
                                <div className={CSS.name}>{ele.product_name}</div>
                                <div className={CSS.brief}>{ele.product_brief}</div>
                                <div className={CSS.price}>
                                    {ele.product_price}
                                    <span className={CSS.oldPrice}><s>{ele.product_org_price}</s></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function ListOneType2(props) {
    return (
        <div className={CSS.ListOneType2} style={{ background: `${props.data.item.body.bg_color}` }}>
            {
                props.data.item.body.items.map((ele, index) => {
                    return (
                        <div className={CSS.goodsItem} key={index}>
                            <div className={CSS.imgWrapper}>
                                <img style={props.style} src={ele.img_url} alt="" />
                            </div>
                            <div className={CSS.goodsInfo}>
                                <div className={CSS.name}>{ele.product_name}</div>
                                <div className={CSS.brief}>{ele.product_brief}</div>
                                <div className={CSS.price}>
                                    {ele.product_price}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function ListOneType3(props) {
    return (
        <div className={CSS.ListOneType3} style={{ background: `${props.data.item.body.bg_color}` }}>
            {
                props.data.item.body.items.map((ele, index) => {
                    return (
                        <div className={CSS.goodsItem} key={index}>
                            <div className={CSS.goodsInfo}>
                                <div className={CSS.name}>{ele.product_name}</div>
                                <div className={CSS.brief}>{ele.product_brief}</div>
                                <div className={CSS.price}>
                                    {ele.product_price}
                                </div>
                            </div>
                            <div className={CSS.imgWrapper}>
                                <img style={props.style} src={ele.img_url} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function SelectComponent(props) {
    // console.log(props)
    if (props.type.item.view_type === "list_two_type13") {
        return (
            <ListTwoType13 style={props.style.listTwoType13} data={props.type}></ListTwoType13>
        )
    }
    else if (props.type.item.view_type === "list_two_type1") {
        return (
            <ListTwoType1 data={props.type} style={props.style.listTwoType1}></ListTwoType1>
        )
    }
    else if (props.type.item.view_type === "list_one_type2") {
        return (
            <ListOneType2 data={props.type} style={props.style.listOneType2or3}></ListOneType2>
        )
    }
    else if (props.type.item.view_type === "list_one_type3") {
        return (
            <ListOneType3 data={props.type} style={props.style.listOneType2or3}></ListOneType3>
        )
    }
    else {
        return <div style={{ display: "none" }}></div>
    }
}
export default class GoodsItem extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            style: {
                listTwoType13: {
                    width: "3.44rem",
                    height: "2.8rem"
                },
                listTwoType1: {
                    width: "3.6rem",
                    height: "3.6rem"
                },
                listOneType2or3: {
                    width: "3.6rem",
                    height: "3.6rem"
                }
            }
        }
    }

    render() {
        return (
            <>
                <SelectComponent type={this.props} style={this.state.style}></SelectComponent>
            </>
        )
    }
}

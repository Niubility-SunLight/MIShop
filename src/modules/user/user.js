import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from "../../components/list/list"
import CSS from "./user.module.scss"

const optionUl = {
    type: CSS.b2,
    list: [
        {
            className: "dfk",
            icoClasName: [CSS.b2Ico, CSS.dfkIco],
            type: "待付款"
        }, {
            className: "dsh",
            icoClasName: [CSS.b2Ico, CSS.dshIco],
            type: "待收货"
        }, {
            className: "thx",
            icoClasName: [CSS.b2Ico, CSS.thxIco],
            type: "退换修"
        },
    ]
}
const ulItem1 = {
    type: CSS.ulItems,
    list: [
        {
            className: CSS.vipMember,
            icoClassName: "",
            type: "会员中心",
        },
        {
            className: CSS.miWallet,
            icoClassName: "",
            type: "我的优惠",
        }
    ]
}
const ulItem2 = {
    type: CSS.ulItems,
    list: [
        {
            className: CSS.miServer,
            icoClassName: "",
            type: "服务中心",
        },
        {
            className: CSS.miHome,
            icoClassName: "",
            type: "小米之家",
        }
    ]
}
const ulItem3 = {
    type: CSS.ulItems,
    list: [
        {
            className: CSS.fCode,
            icoClassName: "",
            type: "F码通道",
        },
    ]
}
const ulItem4 = {
    type: CSS.ulItems,
    list: [
        {
            className: "",
            icoClassName: "",
            type: "设置",
        },
    ]
}
export default class Mine extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.hd}>
                    <div className={CSS.user}>
                        <div className={CSS.userImg}>
                            <img src={require('../../assets/image/avatar.png')} alt="" />
                        </div>
                        <div className={CSS.name}>登录/注册</div>
                    </div>
                </div>
                <div className={CSS.b1}>
                    <div className={CSS.b1Left}>我的订单</div>
                    <div className={`${CSS.trangleIco} ${CSS.b1Right}`}>
                        <Link to="/home" className={CSS.navLink}>全部订单</Link>
                    </div>
                </div>
                <List queryOptionsElementUl={optionUl} ></List>
                <div className="ui-line"></div>
                <List queryOptionsElementUl={ulItem1} ></List>
                <div className="ui-line"></div>
                <List queryOptionsElementUl={ulItem2} ></List>
                <div className="ui-line"></div>
                <List queryOptionsElementUl={ulItem3} ></List>
                <div className="ui-line"></div>
                <List queryOptionsElementUl={ulItem4} ></List>
            </div>
        )
    }
}

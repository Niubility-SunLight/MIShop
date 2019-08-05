import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CSS from "./user.module.scss"

const b2Obj = [
    {
        className: "dfk",
        type: "代付款"
    }, {
        className: "dsh",
        type: "代收货"
    }, {
        className: "thx",
        type: "代退换修"
    },
]
// function ListRender(props) {
//     // console.log(props)
//     let array = props
//     console.log(array)
//     const list = array.map((array, index) => {
//       <li className={array.className} key={index}>{array.type}</li>
//     })
// }

export default class Mine extends Component {

    render() {
        const list = b2Obj.map((array, index) => {
            return <li className={array.className} key={index}>{array.type}</li>
        })
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
                <ul className={CSS.b2}>
                    {list}
                </ul>
            </div>
        )
    }
}

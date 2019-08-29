import React, { Component } from 'react'
import CSS from "./noteWrap.module.scss";
export default class NoteWrap extends Component {
    render() {
        return (
            <>
                <div className={CSS.nologin}>
                    <div>
                        <span>登录后享受更多优惠</span>
                        <em>去登录</em>
                    </div>
                </div>
                <div className={CSS.noitems}>
                    <div>
                        <span>购物车还是空的</span>
                        <em>去逛逛</em>
                    </div>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'
import CSS from "./login.module.scss";
import Form from "./form"
import { withRouter } from "react-router-dom";

function resetPageRootFontSize() {
    let clientW = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientW <= 420) {
        document.getElementsByTagName("html")[0].style.cssText = "font-size:100px";
    } else if (clientW >= 421 && clientW <= 480) {
        document.getElementsByTagName("html")[0].style.cssText = "font-size:110px";
    } else if (clientW > 480 && clientW <= 540) {
        document.getElementsByTagName("html")[0].style.cssText = "font-size:120px";
    } else if (clientW >= 541 && clientW <= 660) {
        document.getElementsByTagName("html")[0].style.cssText = "font-size:125px";
    }
}
class Login extends Component {
    componentDidMount() {
        let reEvt = "orientationchange" in window ? "orientationchange" : "resize"
        document.addEventListener("DOMContentLoaded", resetPageRootFontSize)
        window.addEventListener(reEvt, resetPageRootFontSize)
        if (this.props.location.pathname === "/login") {
            resetPageRootFontSize()
        }
    }
    componentWillUnmount() {
        let reEvt = "orientationchange" in window ? "orientationchange" : "resize"
        let clientW = document.documentElement.clientWidth || document.body.clientWidth;
        document.getElementsByTagName("html")[0].style.fontSize = 50 * (clientW / 360) + "px";
        document.removeEventListener("DOMContentLoaded",resetPageRootFontSize);
        window.removeEventListener(reEvt,resetPageRootFontSize)
    }
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.wrap}>
                    <div className={CSS.formWrap}>
                        <Form />
                    </div>
                    <div className={CSS.lineTitle}>
                        <fieldset>
                            <legend>
                                其他方式登录
                        </legend>
                        </fieldset>
                        <div className={CSS.loginOtherType}>
                            <a href="https://account.xiaomi.com/pass/sns/login/auth?appid=2996826273&&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                <i></i>
                            </a>
                            <a href="https://account.xiaomi.com/pass/sns/login/auth?appid=2088011127562160&&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                <i></i>
                            </a>
                            <a href="https://account.xiaomi.com/pass/sns/login/auth?appid=wxxmh5&scope=snsapi_userinfo&callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go">
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={CSS.customDisplay}>
                    <ul>
                        <li>
                            <a href="#">简体</a>
                            |
                        </li>
                        <li>
                            <a href="#">繁体</a>
                            |
                        </li>
                        <li>
                            <a href="#">English</a>
                            |
                        </li>
                        <li>
                            <a href="#">常见问题</a>
                            |
                        </li>
                        <li>
                            <a href="#">隐私政策</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default withRouter(Login)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CSS from "./login.module.scss"

function LogigPhone(props) {
    return (
        <div>
            <label className={CSS.labelAccount} htmlFor="">
                <div className={CSS.countryCodeList}>
                    <div className={CSS.countryCode}>
                        <span>+86<i></i></span>
                    </div>
                </div>
                <input type="tel" placeholder="手机号码" />
                <div className={CSS.clearInput}>X</div>
            </label>
            <label className={CSS.labelAccount} htmlFor="">
                <input type="tel" placeholder="短信验证码" />
                <div className={CSS.sendCodePanel}>
                    <span>获取验证码</span>
                </div>
            </label>
        </div>
    )
}
function LoginSercet(props) {
    return (
        <div>
            <label className={CSS.labelAccount} htmlFor="">
                <input type="tel" placeholder="手机号码" />
                <div className={CSS.clearInput}>X</div>
            </label>
            <label className={CSS.labelAccount} htmlFor="">
                <input type="password" placeholder="密码" />
                <div className={CSS.showSercetActive}></div>
            </label>
        </div>
    )
}
function LoginEmailBtnWrap() {
    return (
        <div className={CSS.submitBtnPanel}>
            <button className={CSS.submitBtn}>登录</button>
            <button className={CSS.btnSwitch}>手机短信登录/注册</button>
            <div className={CSS.registerOrforget}>
                <Link>立即注册</Link>
                <span>|</span>
                <Link>忘记密码？</Link>
            </div>
        </div>
    )
}
function LoginSercetBtnWrap() {
    return (
        <div className={CSS.submitBtnPanel}>
            <button className={CSS.submitBtn}>立即登录/注册</button>
            <button className={CSS.btnSwitch}>用户名密码登录</button>
        </div>
    )
}
export default class Login extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.wrap}>
                    <div className={CSS.layoutPanel}>
                        <div className={CSS.layout}>
                            <div className={CSS.heardTitle}>
                                <img src={require("../../assets/image/logo.png")} alt="" />
                                <p>小米帐号登录</p>
                            </div>
                            <LoginSercet />
                            {/* <LoginEmailBtnWrap /> */}
                            <LoginSercetBtnWrap />
                            {/* <LogigPhone /> */}
                            <div className={CSS.lineWrap}>
                                <fieldset className={CSS.line}>
                                    <legend>其他方式登录</legend>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import CSS from "./form.module.scss"
function InputWrap(props) {
    return (
        <div>
            <label htmlFor="" className={props.checkInputWarnMode.type === "accountErr" ? [CSS.inputItem, CSS.inputItemErr].join(" ") : CSS.inputItem}>
                {
                    props.loginType ?
                        <div className={CSS.countryCodeList}>
                            <div className="countryCode-animateIn">
                                <span className={CSS.countryCode}>
                                    <tt>+86</tt>
                                    <i></i>
                                </span>
                            </div>
                        </div> : false
                }
                {
                    props.loginType ?
                        <input type="tel" id="inputAccount" data-type="phoneNumber" onChange={props.handleChange} placeholder="手机号码" /> :
                        <input type="tel" id="inputAccount" data-type="account" onChange={props.handleChange} placeholder="邮箱/手机号码/小米ID" />
                }
                {
                    props.account !== "" ? <img src={require("../../assets/image/clearIco.png")} alt="" onClick={props.clearInput} /> : false
                }
            </label>
            <label htmlFor="" className={props.checkInputWarnMode.type === "codeErr" || props.checkInputWarnMode.type === "passwordErr" ? [CSS.inputItem, CSS.inputItemErr].join(" ") : CSS.inputItem}>
                {
                    props.loginType ?
                        <input type="tel" data-type="messageCode" onChange={props.handleChange} placeholder="短信验证码" /> :
                        <input type={props.isShowPassword ? "text" : "password"} data-type="password" onChange={props.handleChange} placeholder="密码" />
                }
                {
                    props.loginType ?
                        <div className={CSS.sendMessageCode} onClick={props.sendMessage}>获取验证码</div> :
                        <img src={props.isShowPassword ? require("../../assets/image/showIcoActive.png") : require("../../assets/image/showIco.png")} alt="" onClick={props.showPassword} />
                }
            </label>
            {
                props.checkInputWarnMode.type !== "" ? <div className={CSS.errText}>
                    <div>
                        <em></em>
                        <span>{props.checkInputWarnMode.Text}</span>
                    </div>
                </div> : false
            }

        </div>
    )
}
function SubmitBtnWrap(props) {
    return (
        <div className={CSS.btnWrap}>
            <button onClick={props.goIndex}>{props.loginType ? "立即登录/注册" : "登录"}</button>
            <button onClick={props.switchLoginMode}>{props.loginType ? "用户名密码登录" : "手机短信登录/注册"}</button>
        </div>
    )
}
class Form extends Component {
    state = {
        loginType: false,
        account: "",
        messageCode: "",

        isShowPassword: false,
        password: "",

        checkInputWarnMode: {
            type: "",
            Text: ""
        }
    }
    handleChange(e) {
        switch (e.target.dataset.type) {
            case "phoneNumber":
            case "account":
                this.setState({ account: e.target.value });
                break;
            case "messageCode":
                this.setState({ messageCode: e.target.value });
                break;
            case "password":
                this.setState({ password: e.target.value });
                break;
            default:
                break;

        }
        this.setState({
            checkInputWarnMode: Object.assign({}, this.state.checkInputWarnMode, { type: "", Text: "" })
        })
    }
    clearInput(e) {
        document.getElementById("inputAccount").value = ""
        this.setState({ account: "" })
    }
    showPassword() {
        this.setState({ isShowPassword: !this.state.isShowPassword })
    }
    switchLoginMode() {
        this.setState({
            loginType: !this.state.loginType,
            checkInputWarnMode: Object.assign({}, this.state.checkInputWarnMode, { type: "", Text: "" })
        })
    }
    sendMessage() {
        if (this.state.messageCode === "") {
            this.inputErrMode("accountErr")
        }
    }
    inputErrMode(mode) {
        switch (mode) {
            case "accountErr":
                this.setState({
                    checkInputWarnMode: Object.assign({}, this.state.checkInputWarnMode, { type: "accountErr", Text: "请输入手机号" })
                })
                break;
            case "codeErr":
                this.setState({
                    checkInputWarnMode: Object.assign({}, this.state.checkInputWarnMode, { type: "codeOrPassWordErr", Text: "短信验证码不正确" })
                })
                break;
            case "passwordErr":
                this.setState({
                    checkInputWarnMode: Object.assign({}, this.state.checkInputWarnMode, { type: "codeOrPassWordErr", Text: "密码错误" })
                })
                break;
            default:
                break;
        }
    }
    goIndex() {
        this.props.history.push("/user")
    }
    render() {
        return (
            <div className={CSS.layoutPanel}>
                <div className={CSS.layOut}>
                    <div className={CSS.mainBox}>
                        <div className={CSS.logoIco}>
                            <img src={require("../../assets/image/logo.png")} alt="" />
                            <p>小米帐号登录</p>
                        </div>
                    </div>
                    <div className={CSS.formPanel}>
                        <InputWrap
                            loginType={this.state.loginType}
                            account={this.state.account}
                            handleChange={(e) => this.handleChange(e)}
                            clearInput={(e) => { this.clearInput(e) }}
                            messageCode={this.state.messageCode}
                            password={this.state.password}
                            isShowPassword={this.state.isShowPassword}
                            showPassword={(e) => this.showPassword(e)}
                            sendMessage={(e) => { this.sendMessage(e) }}
                            checkInputWarnMode={this.state.checkInputWarnMode}

                        />
                        <SubmitBtnWrap
                            loginType={this.state.loginType}
                            switchLoginMode={(e) => this.switchLoginMode(e)}
                            goIndex={(e) => this.goIndex(e)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Form) 
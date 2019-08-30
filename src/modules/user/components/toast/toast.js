import React, { Component } from 'react'
import CSS from "./toast.module.scss"
import { CSSTransition } from "react-transition-group"

export default class Toast extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state={
            
        }
    }

    render() {
        return (
            <div className={CSS.popup}>
                <div className={CSS.mask}></div>
                <div className={CSS.popupBox}>

                    <div className={CSS.content}>
                        <CSSTransition in={this.props.status} timeout={2000} classNames="toastScale">
                            <div className={CSS.dialogBox}>
                                <div className={CSS.dialogContent}>
                                    <div className={CSS.dialogTitle}>协议声明</div>
                                    <div className={CSS.dialogText}>
                                        <div className={CSS.text}>
                                            <a href="http://www.mi.com/about/user-agreement/" target="_blank" rel="noopener noreferrer">《小米商城用户协议》</a>
                                            <a href="https://static.account.xiaomi.com/html/agreement/account/cn.html" target="_blank" rel="noopener noreferrer">《账号协议》</a>
                                            <a href="https://www.mi.com/about/privacy/" target="_blank" rel="noopener noreferrer">《隐私政策》</a>
                                            <p>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={CSS.dialogAction}>
                                    <div className={CSS.btn}>

                                        <span>不同意</span>
                                    </div>
                                    <div className={CSS.btn}><span>同意</span></div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>

                </div>

            </div>
        )
    }


}
Toast.defaultProps = {
    status: false
}



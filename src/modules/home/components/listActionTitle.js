import React, { Component } from 'react'
import CSS from "./listActionTitle.module.scss"
export default class ListActionTitle extends Component {
    render() {
        return (
            <div className={CSS.listActionTitle}>
                <div className={CSS.h}>
                    {
                        this.props.item.body.items.map((ele, index) => {
                            return (
                                <div className={CSS.ti}  key={index}>{ele.action_title}></div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

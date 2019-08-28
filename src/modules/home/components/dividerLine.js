import React, { Component } from 'react'
import CSS from "./dividerLine.module.scss"
export default class DividerLine extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            style: {

            }
        }
    }
    render() {
        return (
            <div className={CSS.dividerLine} style={{
                height: `${this.props.item.body.line_height/150}rem`,
                borderBottom: `${this.props.item.body.line_height/150}rem solid ${this.props.item.body.line_color}`,
                backgroundColor: `${this.props.item.body.line_color}`
            }}>

            </div>
        )
    }
}
import React, { Component } from 'react'

export default class List extends Component {

    render() {
        let list = this.props.queryOptionsElementUl.list.map((value, index) => {
            return (
                <li className={value.className ? value.className : ''} key={index}>
                    <div>
                        <i className={value.icoClasName ? value.icoClasName.join(" ") : ''}></i>
                        <span>{value.type}</span>
                    </div>
                </li>
            )
        })
        return (
            <ul className={this.props.queryOptionsElementUl.type}>
                {list}
            </ul>
        )
    }
}

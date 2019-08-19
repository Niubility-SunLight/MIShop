import React, { Component } from 'react'
import CSS from "./navBarLeft.module.scss";
export default class NavBarLeft extends Component {
    render() {
        return (
            <ul className={CSS.container}>
                {
                    this.props.list.map((value, index) => {
                        return (<li ref="liNavTarget" data-index={index} onClick={this.props.onclick} className={index === this.props.activeNavBarIndex ? [CSS.navItem, CSS.navItemActive].join(" ") : CSS.navItem} key={index}>
                            {value.category_name}
                        </li>)
                    })
                }
            </ul>
        )
    }
}

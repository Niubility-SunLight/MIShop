import React, { Component } from 'react'
import CSS from "./cellsAutoFill.module.scss";
export default class CellsAutoFill extends Component {
    render() {
        return (
            <div className={CSS.cellsAutoFill} style={{ width: `${this.props.item.body.w / 100}rem`, height: `${this.props.item.body.h / 100}rem` }}>
                {
                    this.props.item.body.items.map((ele, index) => {
                        return (
                            <div className={CSS.multiCellItem} key={index} style={{ width: `${ele.w / 100}rem`, height: `${ele.h / 100}rem`, left: `${ele.x / 100}rem`, top: `${ele.y / 100}rem` }}>
                                <img src={ele.img_url} alt="" />
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}

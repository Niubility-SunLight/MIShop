import React, { Component } from 'react'
import CSS from "./cellsAutoFill.module.scss";
export default class CellsAutoFill extends Component {
    render() {
        return (
            <div className={CSS.cellsAutoFill}>
                <div className={CSS.multiCellItem}></div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import CSS from "./content.module.scss";
import Swiper from "@/components/swiper/swiper"
import CellsAutoFill from "./cellsAutoFill";
import DividerLine from "./dividerLine"
export default class Content extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className={CSS.pageWrap}>
                <div className={CSS.bodys}>
                    {
                        this.props.section.map((ele, index) => {
                            if (ele.view_type === "gallery") {
                                return (
                                    <Swiper item={ele} key={index}></Swiper>
                                )
                            } else if (ele.view_type === "cells_auto_fill") {
                                return (
                                    <CellsAutoFill item={ele} key={index}></CellsAutoFill>
                                )
                            } else if (ele.view_type === "divider_line") {
                                return (
                                    <DividerLine item={ele} key={index}></DividerLine>
                                )

                            } else if (ele.view_type === "list_two_type13") {

                            }

                        })
                    }



                </div>
            </div>
        )
    }
}

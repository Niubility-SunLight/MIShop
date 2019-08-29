import React, { Component } from 'react'
import CSS from "./content.module.scss";
import Swiper from "@/components/swiper/swiper"
import CellsAutoFill from "./cellsAutoFill";
import DividerLine from "./dividerLine"
import GoodsItem from "./goodsItem"
import ListActionTitle from "./listActionTitle"
export default class Content extends Component {
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
                            }
                            if (ele.view_type === "cells_auto_fill") {
                                return (
                                    <CellsAutoFill item={ele} key={index}></CellsAutoFill>
                                )
                            }
                            else if (ele.view_type === "divider_line") {
                                return (
                                    <DividerLine item={ele} key={index}></DividerLine>
                                )

                            }
                            else if (ele.view_type === "list_action_title") {
                                return (<ListActionTitle item={ele} key={index}></ListActionTitle>
                                )
                            }
                            else if (ele.view_type === "list_two_type13" || ele.view_type === "list_two_type1" || ele.view_type === "list_one_type2" || ele.view_type === "list_one_type3") {
                                return (
                                    <GoodsItem item={ele} key={index}></GoodsItem>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

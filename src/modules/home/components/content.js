import React, { Component } from 'react'
import CSS from "./content.module.scss";
import Swiper from "@/components/swiper/swiper"
import CellsAutoFill from "./cellsAutoFill";
export default class Content extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className={CSS.pageWrap}>
                <div className={CSS.bodys}>
                    <Swiper></Swiper>
                    <CellsAutoFill></CellsAutoFill>
                </div>
            </div>
        )
    }
}

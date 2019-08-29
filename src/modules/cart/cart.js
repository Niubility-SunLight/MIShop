import React, { Component } from 'react'
import CSS from "./cart.module.scss"
import NoteWrap from "./components/noteWrap";
import RecommendBox from "./components/RecommendBox";
import { recommendList } from "./data";
export default class Cart extends Component {
    render() {
        return (
                <div className={CSS.container}>
                    <div className={CSS.pageWrap}>
                        <NoteWrap></NoteWrap>
                        <RecommendBox data={recommendList}></RecommendBox>
                    </div>
                </div>
        )
    }
}

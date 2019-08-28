import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./swiper.scss"
export default class componentName extends Component {
    componentDidMount() {
        new Swiper(this.refs.banner, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        return (
            <>
                <div className="swiper-container" ref="banner">
                    <div className="swiper-wrapper">
                        {
                            this.props.item.body.items.map((ele,index)=>{
                                return(
                                    <div className="swiper-slide" key={index} style={{height:`${ele.h/100}rem`}}>
                                        <img src={ele.img_url} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./swiper.scss"
export default class componentName extends Component {

    componentDidMount() {
        var mySwiper = new Swiper(this.refs.banner, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },


        })
        console.log(this.refs.banner)
    }

    render() {
        return (
            <>
                <div className="swiper-container" ref="banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{height:"3.6rem"}}>
                            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d5409bdcde62720e90b40de23afb0d3.jpg?thumb=1&w=720&h=360" alt=""/>
                        </div>
                        <div className="swiper-slide"  style={{height:"3.6rem"}}>
                            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/939a2f677670d5c852b07ce574a78cae.jpg?thumb=1&w=720&h=360" alt=""/>
                        </div>
                        <div className="swiper-slide"  style={{height:"3.6rem"}}>
                            <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d5409bdcde62720e90b40de23afb0d3.jpg?thumb=1&w=720&h=360" alt=""/>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </>
        )
    }
}

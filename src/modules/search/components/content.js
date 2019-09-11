import React, { Component } from 'react'
import CSS from "./content.module.scss"
let data = {
    ad_list: [
        {
            body: {
                h: 300,
                items: [
                    {
                        action: {
                            log_code: "31wapadsearch-precells_auto_fill001001#t=ad&act=product&page=adsearch-pre&pid=10000180&bid=3477181.1&adp=63&adm=14426",
                            path: "10000180",
                            type: "product"
                        },
                        h: 300,
                        img_url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/87c3fdbef1d7d53511d7b9c300bd5d7a.jpg?w=1080&h=300&bg=C0E3E5",
                        img_url_webp: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/87c3fdbef1d7d53511d7b9c300bd5d7a.jpg?f=webp&w=1080&h=300&bg=C0E3E5",
                        path_type: "image",
                        w: 1080
                    }
                ],
                line_color: "",
                line_height: "",
                title_logo_url: "",
                w: 1080
            },
            stat: "",
            view_type: "cells_auto_fill"
        }
    ],
    gif_url: "https://v.mifile.cn/v1/a1/f4c27b6a-d110-6698-73c1-2a2e1101a70f.gif",
    hot_class: [
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "手机",
            parameter_id: 1,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "电视",
            parameter_id: 7,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "笔记本",
            parameter_id: 2,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "盒子",
            parameter_id: 9,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "路由器",
            parameter_id: 12,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "平板",
            parameter_id: 3,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "手表",
            parameter_id: 20,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "VR",
            parameter_id: 21,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "穿戴",
            parameter_id: 18,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "空气净化器",
            parameter_id: 5,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "空调",
            parameter_id: 59,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "洗衣机",
            parameter_id: 60,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "耳机",
            parameter_id: 8,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "家电",
            parameter_id: 4,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "安防监控",
            parameter_id: 24,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "酷玩",
            parameter_id: 27,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "相机",
            parameter_id: 23,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "健康",
            parameter_id: 26,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "汽车用品",
            parameter_id: 17,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "户外",
            parameter_id: 16,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "出行",
            parameter_id: 14,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "灯具",
            parameter_id: 28,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "智能",
            parameter_id: 29,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "包",
            parameter_id: 31,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "旅行箱",
            parameter_id: 30,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "电源电池",
            parameter_id: 33,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "配件",
            parameter_id: 32,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "婴童",
            parameter_id: 13,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "日用百货",
            parameter_id: 50,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "运动鞋",
            parameter_id: 52,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "服饰",
            parameter_id: 53,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "眼镜",
            parameter_id: 51,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "个护",
            parameter_id: 54,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "办公用品",
            parameter_id: 61,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "手机贴膜",
            parameter_id: 36,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "手机保护壳",
            parameter_id: 35,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "电视配件",
            parameter_id: 43,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "出行配件",
            parameter_id: 45,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "平板配件",
            parameter_id: 42,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "笔记本配件",
            parameter_id: 41,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "音箱",
            parameter_id: 10,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "米粉卡",
            parameter_id: 55,
            search_title: "",
            top_title: "",
            value: ""
        },
        {
            bottom_title: "",
            icon: "",
            is_page_show: false,
            name: "服务",
            parameter_id: 56,
            search_title: "",
            top_title: "",
            value: ""
        }
    ],
    keywords: [
        {
            back_n: "#e4f5e2",
            border_n: "#97c28a",
            font_n: "#484848",
            word: "Redmi Note 8 Pro"
        },
        {
            back_n: "#e4f5e2",
            border_n: "#97c28a",
            font_n: "#484848",
            word: "Redmi Note 8"
        },
        {
            back_n: "#e4f5e2",
            border_n: "#97c28a",
            font_n: "#484848",
            word: "RedmiBook 14增强版"
        },
        {
            back_n: "#f9eaea",
            border_n: "#fca0a7",
            font_n: "#484848",
            word: "Redmi Note 7 Pro"
        },
        {
            back_n: "#fae8e8",
            border_n: "#e3af96",
            font_n: "#484848",
            word: "米家初心足金手链"
        },
        {
            back_n: "#f2f6e9",
            border_n: "#bbd090",
            font_n: "#484848",
            word: "小米手环4"
        },
        {
            back_n: "#f8f2ec",
            border_n: "#fac288",
            font_n: "#484848",
            word: "保温杯"
        },
        {
            back_n: "#f9eaea",
            border_n: "#fca0a7",
            font_n: "#484848",
            word: "彩色相纸"
        }
    ]
}
export default class componentName extends Component {
    render() {
        return (
            <div className={CSS.container}>
                <div className={CSS.searchPromotion}>
                    <div className={CSS.searchPromotionTtile}>热门搜索</div>
                    <div className={CSS.searchPromotionList}>
                        <div className={CSS.itemList}>
                            <div className={CSS.item}>
                                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/87c3fdbef1d7d53511d7b9c300bd5d7a.jpg?w=1080&h=300&bg=C0E3E5" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={CSS.searchKey}>
                    {
                        data.keywords.map((ele, index) => {
                            return (
                                <div className={CSS.searchKeyItem} key={index} style={{ color: ele.font_n, borderColor: ele.border_n, backgroundColor: ele.back_n }}>
                                    {ele.word}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={CSS.searchHotClassify}>
                    <div className={CSS.searchPromotionTitle}>
                        常用分类
                    </div>
                    <div className={CSS.hotClassifyList}>
                        {
                            data.hot_class.map((ele, index) => {
                                return (
                                    <div className={CSS.item} key={index}>
                                        {ele.name}
                                    </div>
                                )
                            })
                        }
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

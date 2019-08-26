import React, { Component } from 'react'
import CSS from "./header.module.scss";
import { tabs } from "./data"
import { CSSTransition } from "react-transition-group"
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExtendArrow: false,
            selectTabsIndex: 0
        }

    }
    selectTabs(e, index) {
        e.persist()
        this.setState({
            selectTabsIndex: index
        })
    }
    extendArrowList(e) {
        e.persist()
        this.setState({
            isExtendArrow: !this.state.isExtendArrow
        })
    }
    render() {
        return (
            <div className={CSS.container}>
                <div className={this.state.isExtendArrow ? CSS.mask : ''}></div>
                <div className={CSS.appHeaderWrapper}>
                    <div className={CSS.left}>
                        <div className={CSS.leftHeader}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="" />
                        </div>
                    </div>
                    <div className={CSS.middle}>
                        <div className={CSS.appHeaderTitle}>
                            <i></i>
                            搜索商品名称
                        </div>
                    </div>
                    <div className={CSS.right}>
                        <div className={CSS.headerRight}>
                            <i className={CSS.headerIco}></i>
                        </div>
                    </div>
                </div>
                <div className={CSS.navWrap}>
                    <div className={CSS.navDisplay} onClick={(e) => this.extendArrowList(e)}>
                        <i className={this.state.isExtendArrow ? [CSS.extendDefault, CSS.extendActive].join(" ") : CSS.extendDefault}></i>
                    </div>
                    <CSSTransition in={this.state.isExtendArrow} timeout={300} classNames="homeHeaderSlide">
                        <div className={this.state.isExtendArrow ? [CSS.navItemLayer, CSS.navItemLayerActive].join(" ") : CSS.navItemLayer}>
                            <div className={CSS.title}>全部</div>
                            <div className={CSS.btnWrap}>
                                {
                                    tabs.map((ele, index) => {
                                        return (
                                            <span className={index === this.state.selectTabsIndex ? [CSS.extraBtn, CSS.current].join(" ") : CSS.extraBtn} key={index} onClick={(e) => this.selectTabs(e, index)}>
                                                {ele.name}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </CSSTransition>
                    <div className={CSS.nav} style={this.state.isExtendArrow ? { display: 'none' } : { display: 'block' }}>
                        {
                            tabs.map((ele, index) => {
                                return (
                                    <div className={CSS.navItem} key={index} onClick={(e) => this.selectTabs(e, index)}>
                                        <span className={index === this.state.selectTabsIndex ? [CSS.navItemDefault, CSS.navItemActive].join(" ") : CSS.navItemDefault}>
                                            {ele.name}
                                        </span>
                                    </div>
                                )
                            })
                        }
                        <div className={CSS.navItemExtra}></div>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'

import ReactDOM from 'react-dom';
import BScroll from 'better-scroll';
import "./scroll.scss"
import PropTypes from 'prop-types'

class Scroll extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidUpdate() {
        // 组件更新后
        if (this.bScroll && this.props.refresh === true) {
            this.bScroll.refresh();
        }
    }

    componentWillUnmount() {
        this.bScroll.off('scroll');
        this.bScroll = null;
    }

    componentDidMount() {
        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);
        setTimeout(() => {
            if (!this.bScroll) {
                this.bScroll = new BScroll(this.scrollView, {
                    probeType: 3,
                    click: this.props.click
                });
                if (this.props.onScroll) {
                    this.bScroll.on('scroll', (scroll) => {
                        this.props.onScroll(scroll);
                    })
                }
            }
        }, 0);

    }

    refresh() {
        if (this.bScroll) {
            this.bScroll.refresh();
        }
    }
    render() {
        return (
            <div className="scroll-wrapper scroll-view" ref="scrollView">
                {this.props.children}
            </div>
        )
    }
}

Scroll.defaultProps = {
    click: true,
    refresh: false,
    onScroll: null
}

Scroll.propTypes = {
    click: PropTypes.bool,
    refresh: PropTypes.bool,
    onScroll: PropTypes.func
}

export default Scroll
import React, { Component } from 'react'
import Scroll from "@/components/scroll/scroll"
import PropTypes from 'prop-types'

class Category extends Component {
    constructor(props) {
        super(props)

    }
    state={refreshScroll:false}
    componentDidMount(){
        setTimeout(() => {
            this.setState({refreshScroll:true})
        }, 20);
    }
    render() {
        return (
            <>
                <Scroll>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </Scroll>
            </>
        )
    }
}

Category.propTypes = {

}

export default Category
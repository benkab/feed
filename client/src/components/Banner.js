import React, { Component } from 'react';
import BannerItem from './BannerItem';
import './../assets/css/banner.css';

const source        = require('./../assets/images/fuchs.jpg');
const sourceTwo     = require('./../assets/images/building.jpg');

class Banner extends Component {

    constructor(props){
        super(props);
        this.state = {
            slideCount: 1
        }
    }

    slideUp(){
        if(this.state.slideCount > 1){
            this.setState({ slideCount: this.state.slideCount - 1 })
        }

    }

    slideDown(){
        if(this.state.slideCount < 2){
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    render() {
        return (
            <div className="row banner">
                { this.state.slideCount === 1 ? <BannerItem source={source} /> : null }
                { this.state.slideCount === 2 ? <BannerItem source={sourceTwo} /> : null }
                <div className="carousel-indicators">
                    {
                        (this.state.slideCount !== 1) &&
                        <img
                            src={require('./../assets/icons/arrow-up.svg')}
                            alt="arrow"
                            className="arrow"
                            onClick={this.slideUp.bind(this)}/>
                    }
                    <br />
                    <br />
                    <img
                        src={require('./../assets/icons/arrow-down.svg')}
                        alt="arrow"
                        className="arrow"
                        onClick={this.slideDown.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Banner;
import React, { Component } from 'react';
import './../assets/css/banner.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BannerItem extends Component {
    render(props) {
        return (
            <div className="row banner-container">
                <div className="col l5 m5 s12 banner-left-column">
                    <img src={require('./../assets/icons/bookmark.svg')} alt="icon" className="bookmark-icon" />
                    <p className="publiser-name">
                        Le potentiel
                    </p>
                    <p className="post-title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dolore
                        dolores eius incidunt ipsam.
                    </p>
                    <p className="post-details-container">
                        <img src={require('./../assets/icons/clock.svg')} alt="icon" className="clock-icon" />
                        <span className="clock-time">2 hours ago</span>
                    </p>
                    <ul>
                        <li>
                            <img src={require('./../assets/icons/heart.svg')} alt="icon" className="clock-icon" />
                            <span className="icon-detail">10</span>
                        </li>
                        <li>
                            <img src={require('./../assets/icons/comment-circle.svg')} alt="icon" className="clock-icon" />
                            <span className="icon-detail">2</span>
                        </li>
                    </ul>
                    <a className="start-reading">
                        <img src={require('./../assets/icons/arrow-right.svg')} alt="icon" className="arrow-icon" />
                    </a>
                </div>
                <div className="col l7 m7 s12 banner-right-column">
                    <div className="card">
                        <div className="card-image">
                            <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionEnterTimeout={2000}
                                transitionLeaveTimeout={2000}>
                                <img src={this.props.source} alt="post-image" />
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerItem;
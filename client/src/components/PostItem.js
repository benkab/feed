import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import './../assets/css/post.css';

class PostItem extends Component {
    render(props) {
        return (
            <div className="post-item-container">
                <div className="col l7 m7 banner-right-column">
                    <div className="card">
                        <div className="card-image">
                           <img src={this.props.source} alt="post-image" />
                        </div>
                    </div>
                </div>
                <div className="col l5 m5 banner-left-column">
                    <p className="publiser-name">
                        Le potentiel
                        <img src={require('./../assets/icons/bookmark.svg')} alt="icon" className="bookmark-icon" />
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
            </div>
        );
    }
}

export default PostItem;

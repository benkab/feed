import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import PostItem from './PostItem';
import './../assets/css/post.css';

const sourceTwo     = require('./../assets/images/building.jpg');
const sourceThree   = require('./../assets/images/man.jpg');
const sourceFour    = require('./../assets/images/dog.jpg');

class Post extends Component {
    render() {
        return (
            <div className="row post">
                <div className="container">
                    <ul className="section-title-list">
                        <li>
                            <a className="active">LATEST</a>
                        </li>
                        <li>
                            <a>POPULAR</a>
                        </li>
                        <li>
                            <a>MOST COMMENTED</a>
                        </li>
                    </ul>
                </div>
                <div className="row post-slider">
                    <PostItem source={sourceTwo} />
                    <PostItem source={sourceThree} />
                    <PostItem source={sourceFour} />
                </div>
            </div>
        );
    }
}

export default Post;

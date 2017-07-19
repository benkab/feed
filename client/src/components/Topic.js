import React, { Component } from 'react';
import './../assets/css/topic.css';
import TopicItem from './TopicItem';

const sourceTwo     = require('./../assets/images/building.jpg');
const sourceThree   = require('./../assets/images/man.jpg');
const sourceFour    = require('./../assets/images/dog.jpg');

class Topic extends Component {
    render() {
        return (
            <div className="row topic">
                <div className="container">
                    <ul className="section-title-list">
                        <li>
                            <a className="active">TOPICS</a>
                        </li>
                    </ul>
                </div>
                <div className="row topic-slider">
                    <TopicItem description="Education" />
                    <TopicItem description="Politique" />
                    <TopicItem description="Religion" />
                    <TopicItem description="Santé" />
                    <TopicItem description="Divertissement" />
                    <TopicItem description="Sport" />
                </div>
            </div>
        );
    }
}

export default Topic;

import React, { Component } from 'react';
import './../assets/css/chronique.css';
import ChroniqueItem from './ChroniqueItem';

const source        = require('./../assets/images/portrait-1.jpg');
const sourceTwo     = require('./../assets/images/portrait-2.jpg');
const sourceThree   = require('./../assets/images/portrait-3.jpg');
const sourceFour    = require('./../assets/images/portrait-4.jpg');
const sourceFive    = require('./../assets/images/portrait-5.jpg');
const sourceSix     = require('./../assets/images/portrait-6.jpg');

class Chronique extends Component {
    render() {
        return (
            <div className="row chronique">
                <div className="container">
                    <ul className="section-title-list">
                        <li>
                            <a className="active">CHRONIQUES</a>
                        </li>
                    </ul>
                </div>
                <div className="row chronique-slider">
                    <ChroniqueItem source={source} />
                    <ChroniqueItem source={sourceTwo} />
                    <ChroniqueItem source={sourceFour} />
                    <ChroniqueItem source={sourceFive} />
                    <ChroniqueItem source={sourceSix} />
                </div>
            </div>
        );
    }
}

export default Chronique;

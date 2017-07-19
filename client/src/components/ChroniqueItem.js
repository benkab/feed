import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import './../assets/css/chronique.css';

class ChroniqueItem extends Component {
    render(props) {
        return (
            <div className="chronique-item-container">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.source} alt="image" />
                        <div className="card-overlay">
                            <div className="card-overlay-container">
                                <img src={require('./../assets/icons/clock-overlay.svg')} alt="icon" className="clock-icon-2" />
                                <img src={require('./../assets/icons/bookmark-overlay.svg')} alt="icon" className="bookmark-icon" />
                                <p className="chronique-name">
                                    Les chroniques de Tabitha
                                </p>
                                <p className="chronique-title">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur autem debitis deleniti dolores magni nesciunti sit ullam.
                                </p>
                                <span className="clock-time">2 hours ago</span>
                                <ul>
                                    <li>
                                        <img src={require('./../assets/icons/heart-overlay.svg')} alt="icon" className="clock-icon" />
                                        <span className="icon-detail">10</span>
                                    </li>
                                    <li>
                                        <img src={require('./../assets/icons/comment-circle-overlay.svg')} alt="icon" className="clock-icon" />
                                        <span className="icon-detail">2</span>
                                    </li>
                                </ul>
                                {/*<a className="readButton">READ</a>*/}
                            </div>
                            {/*<img src={require('./../assets/icons/clock-overlay.svg')} alt="icon" className="clock-icon-2" />*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChroniqueItem;

import React, { Component } from 'react';
import './../../assets/css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="row header">
                <div className="container">
                    <ul className="header-left-list">
                        <li>
                            <a className="active">TIMELINE</a>
                        </li>
                        <li>
                            <a>EXPLORE</a>
                        </li>
                        <li>
                            <a>PAGES</a>
                        </li>
                    </ul>
                    {/*<ul className="header-right-list right">*/}
                        {/*<li>*/}
                            {/*<a>PAGES</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}

export default Header;
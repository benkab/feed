import React, { Component } from 'react';
import Header from './common/Header';
import Banner from './Banner';
import Post from './Post';
import './../assets/css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="row home">
        <Header />
        <Banner />
        <Post />
      </div>
    );
  }
}

export default Home;

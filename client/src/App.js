import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/test')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Working</h1>
      </div>
    );
  }
}

export default App;

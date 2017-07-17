import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import Page from './components/Page';
import Favorite from './components/Favorite';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/favorites" component={Favorite} />
      <Route path="/pages" component={Page} />
    </Router>
);

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
// registerServiceWorker();

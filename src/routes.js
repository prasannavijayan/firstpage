import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.scss';
import Header from './Components/Header/Header.js';
import Home from './Containers/HomeContainer.js';
import About from './Containers/AboutContainer.js';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.scss';

// Components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

// Containers
import Home from './Containers/HomeContainer.js';
import Event from './Containers/EventContainer.js';
import FAQ from './Containers/FAQContainer.js';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="top">
            <Header/>
          </div>
          <div className="middle">
            <Route exact path="/" component={Home}/>
            <Route path="/event" component={Event}/>
            <Route path="/faq" component={FAQ}/>
          </div>
          <div className="bottom">
            <Footer/>
          </div>
        </div>
      </Router>
    )
  }
}

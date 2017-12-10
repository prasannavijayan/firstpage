import React, { Component } from 'react';
import Header from './../Components/Header/Header.js';
import Subscription from './../Components/Subscription/Subscription.js';

class HomeContainer extends Component {
  render() {
    return (
    	<div>
	      <Header />
	      <Subscription />
	    </div>
    );
  }
}

export default HomeContainer;

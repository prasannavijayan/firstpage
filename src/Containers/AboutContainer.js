import React, { Component } from 'react';
import Subscription from './../Components/Subscription/Subscription.js';

class HomeContainer extends Component {
  render() {
    return (
    	<div>
	      <p>About</p>
	      <Subscription />
	    </div>
    );
  }
}

export default HomeContainer;

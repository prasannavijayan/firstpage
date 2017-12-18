import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomeContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			title: props.title? props.title: "GDG Madurai"
		}
	}
  render() {
    return (
    	 <Helmet>
          <title>{this.state.title}</title>
	      </Helmet>
    );
  }
}

export default HomeContainer;

import React, { Component } from 'react';
import HelmetTitle from './../Components/Utilities/HelmetTitle.js';
import WorkshopCards from './../Components/WorkshopCards/WorkshopCards.js';

class HomeContainer extends Component {
  render() {
    return (
    	<div>
	    	<div className="container">
	    		<HelmetTitle title="GDG Madurai - Home Page"/>
		      <div className="herounit row">
		      	<div className="col-md-6">
			      	<h1>What is GDG?</h1>
			      	<p>Google developers group is a community of enthusiastic Google developers.
			      		GDG provides a vast opportunity to those who are interested in Google's developer technology;
			      		starting from android, chrome, drive, Google cloud platforms to product API's like the cast API, maps API.
			      		The idea of GDG is to bring out talented people with similar interest to the society by engaging them in lot of events.
			      	</p>
		      	</div>
		      </div>
		    </div>
		    <WorkshopCards />
		    <iframe title="Madurai location" className="fullscreen" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAeScrp22ORrstH2OV87DnxEQwkkoedoUE&q=Geomeo+Informatics+Pvt+Ltd"></iframe>
		  </div>
    );
  }
}

export default HomeContainer;

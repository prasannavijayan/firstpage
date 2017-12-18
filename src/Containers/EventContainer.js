import React, { Component } from 'react';
import EventList from './../Components/Events/EventList.js';
import HelmetTitle from './../Components/Utilities/HelmetTitle.js';

class EventContainer extends Component {
  render() {
    return (
    	<div className="container">
    		<HelmetTitle title="GDG Madurai - Event Page" />
	      <p className="heading pt-3">Past Event</p>
	      <EventList />
	    </div>
    );
  }
}

export default EventContainer;

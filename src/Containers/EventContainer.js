import React, { Component } from 'react';
import EventList from './../Components/Events/EventList.js';

class EventContainer extends Component {
  render() {
    return (
    	<div className="container">
	      <p className="heading pt-3">Past Event</p>
	      <EventList />
	    </div>
    );
  }
}

export default EventContainer;

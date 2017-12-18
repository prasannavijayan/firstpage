import React, { Component } from 'react';
// import { getAllEvents } from './../../Services/event.js';
import Moment from 'react-moment';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			events: [{
				"name": "Google Developer Day 2017 Extended Madurai",
				"date": "2017-12-10",
				"location": "Solamalai Engineering College",
				"location_1": "S.V.Raja Nagar, Veerapanjan - Madurai",
				"total_attendees": "192"
			},{
				"name": "Digital Ocean comes to Madurai",
				"date": "2017-11-25",
				"location": "Hotel North Gate",
				"location_1": "Opposite to American College, Goripalayam, Madurai - 2",
				"total_attendees": "66"
			}]
		}
	}
	renderEvent(event) {
		return (
			<div className="event" key={event.name}>
				<div className="event-name">{event.name}</div>
				<div className="event-data"><Moment format="MMM DD, YYYY">{event.date}</Moment> | {event.total_attendees} - attendees</div>
			</div>)
	}

  render() {
  	let eventsView = this.state.events.map((event) => this.renderEvent(event));
    return (
    	<div>{eventsView}</div>
    );
  }
}

export default Header;

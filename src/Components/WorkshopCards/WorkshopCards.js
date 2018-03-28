import React, { Component } from 'react';

import BullHorn from 'react-icons/lib/fa/bullhorn';
import LightBulb from 'react-icons/lib/fa/lightbulb-o';
import LocationArrow from 'react-icons/lib/fa/location-arrow';
import Cloud from 'react-icons/lib/fa/cloud';
import Android from 'react-icons/lib/fa/android';
import PaperPlane from 'react-icons/lib/fa/paper-plane-o';
// import { Link } from 'react-router-dom';

class WorkshopCards extends Component {

	vDevfest() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<BullHorn className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Google DevFest</h4>
				    <p className="card-text">DevFests are large, community-run events that offers speaker sessions across multiple product areas, hack-a-thons, code labs, and more. Awesome speakers and lot's of fun!</p>
				  </div>
				</div>
			</div>
		)
	}

	vWorkshop() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<LightBulb className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Workshop</h4>
				    <p className="card-text">Tons of workshops, hands-on experience and hacking. Come and learn your favourite technology!</p>
				  </div>
				</div>
			</div>
		)
	}

	vMeetups() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<LocationArrow className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Meetups</h4>
				    <p className="card-text">Our meetups range from large gatherings with demos and lectures, to events like code sprints and hackathons.</p>
				  </div>
				</div>
			</div>
		)
	}

	vAndroid() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<Android className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Android</h4>
				    <p className="card-text">Android is a mobile operating system (OS) based on the Linux kernel and currently developed by Google.</p>
				  </div>
				</div>
			</div>
		)
	}

	vVisits() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<PaperPlane className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Industrial visits</h4>
				    <p className="card-text">Members of the Google Developer Group gets to visit offices of MNCs and startups for wide exposure of real world functioning.</p>
				  </div>
				</div>
			</div>
		)
	}

	vCloud() {
		return (
			<div className="col-md-4">
				<div className="card dark-theme">
					<div className="card-center">
						<Cloud className="card-image"/>
					</div>
				  <div className="card-block">
				    <h4 className="card-title">Google Cloud</h4>
				    <p className="card-text">Google Cloud Platform is a cloud computing platform by Google that offers hosting on the same supporting infrastructure that Google uses internally</p>
				  </div>
				</div>
			</div>
		)
	}

  render() {
    return (
			<div className="container workshopcard">
				<div className="row">
					{this.vDevfest()}
					{this.vWorkshop()}
					{this.vMeetups()}
					{this.vAndroid()}
					{this.vVisits()}
					{this.vCloud()}
				</div>
			</div>
    );
  }
}

export default WorkshopCards;

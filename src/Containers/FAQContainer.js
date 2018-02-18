import React, { Component } from 'react';
import HelmetTitle from './../Components/Utilities/HelmetTitle.js';

class FAQContainer extends Component {
  render() {
    return (
    	<div className="container">
    		<HelmetTitle title="GDG Madurai - FAQ Page" />
    		<h2 className="lightTitle">Frequently Asked Questions</h2>
    		<div className="faq">
    			<p className="question">Where do we have to register for the events like GDG DevFest/workshops?</p>
    			<p className="answer">
    				Please checkout our official meetup page for event&nbsp;
    				<a href="https://www.meetup.com/GDG-Madurai/" target="_blank" rel="noopener noreferrer">_here</a>
    			</p>
    		</div>
    		<div className="faq">
    			<p className="question">Do you charge any fee for event?</p>
    			<p className="answer">
    				Currently we do not charge any fee for any event. If it's so, we will inform you prior to the event.
    			</p>
    		</div>
	    </div>
    );
  }
}

export default FAQContainer;

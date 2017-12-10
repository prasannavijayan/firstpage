import React, { Component } from 'react';

class Subscription extends Component {
  render() {
    return (
			<div className="container herounit">
			  <div className="form-group">
			  	<div className="">
				    <label>Subscribe to GDG Madurai's NewsLetter</label>
				    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required="true" />
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				    <button type="submit" className="btn btn-primary form-control">Subscribe</button>
				  </div>
			  </div>
			</div>
    );
  }
}

export default Subscription;

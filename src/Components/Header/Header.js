import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
			  	<span className="navbar-brand mb-0 h1">GDG Madurai</span>
			  	<div className="links">
				    <a href="/">Home</a>
				    <a href="/event">Event</a>
			  	</div>
			  </div>
			</nav>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class Header extends Component {
	// <img src="/img/logo.png" alt="Google Developers Group logo madurai"/>
  render() {
    return (
			<nav className="navbar navbar-light bg-dark">
				<div className="container bg-dark">
			  	<span className="navbar-brand mb-0 h1">
			  		GDG Madurai
			  	</span>
			  	<div className="links">
				    <a href="/">Home</a>
				    <a href="/">Blog</a>
				    <a href="/event">Events</a>
				    <a href="/contact">Contact</a>
			  	</div>
			  </div>
			</nav>
    );
  }
}

export default Header;

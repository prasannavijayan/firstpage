import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
				    <Link to="/">Home</Link>
				    <Link to="/">Blog</Link>
				    <Link to="/event">Events</Link>
				    <Link to="/contact">Contact</Link>
			  	</div>
			  </div>
			</nav>
    );
  }
}

export default Header;

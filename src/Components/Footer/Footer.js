import React, { Component } from 'react';

// Google+, Facebook, Twitter Icons
// import FaGoogle from 'react-icons/lib/fa/google-plus';
// import FaFacebook from 'react-icons/lib/fa/facebook';
// import FaTwitter from 'react-icons/lib/fa/twitter';

class Footer extends Component {
  render() {
    return (
			<footer className="bg-dark">
				<div className="container d-flex justify-content-between">
					<div className="text-light-black">
						<p>Google Developers Group Madurai</p>
						<p className="text-light-black">Copyrights &copy; 2018</p>
					</div>
					<div className="social_links">
					</div>
				</div>
				<div className="quick_links d-flex justify-content-between">
					<div>
						<h6 className="text-light-black">Quick Links</h6>
						<ul>
							<li>
								<a href="https://developers.google.com/programs/community/" rel="noopener noreferrer" target="_blank">Developers Group</a>
							</li>
							<li>
								<a href="https://developer.android.com/index.html" rel="noopener noreferrer" target="_blank">Android</a>
							</li>
							<li>
								<a href="https://firebase.google.com/" rel="noopener noreferrer" target="_blank">Firebase</a>
							</li>
							<li>
								<a href="https://developers.google.com/maps/" rel="noopener noreferrer" target="_blank">Maps</a>
							</li>
							<li>
								<a href="https://www.tensorflow.org/" rel="noopener noreferrer" target="_blank">Tensor Flow</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="text-light-black">Other Links</h6>
						<ul>
							<li>
								<a href="/faq" rel="noopener noreferrer" target="_blank">FAQ</a>
							</li>
							<li>
								<a href="/blog" rel="noopener noreferrer" target="_blank">Blog</a>
							</li>
							<li>
								<a href="/coc" rel="noopener noreferrer" target="_blank">Code of Conduct</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="text-light-black">Events</h6>
						<ul>
							<li>
								<a href="https://www.meetup.com/GDG-Madurai/" rel="noopener noreferrer" target="_blank">Meetup</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className="text-light-black">Join us in</h6>
						<ul>
							<li>
								<a href="https://plus.google.com/communities/113213079482851146474" rel="noopener noreferrer" target="_blank">
									Google
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/pg/gdgMaduraipage/posts/" rel="noopener noreferrer" target="_blank">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://twitter.com/gdgmadurai" rel="noopener noreferrer" target="_blank">
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
    );
  }
}

export default Footer;
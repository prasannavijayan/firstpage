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
						<h6 className="text-light-black">Programs</h6>
						<ul>
							<li>
								<a href="https://developers.google.com/programs/community/gdg" rel="noopener noreferrer" target="_blank">Google Developers Group</a>
							</li>
							<li>
								<a href="https://www.womentechmakers.com/" rel="noopener noreferrer" target="_blank">Women Techmakers</a>
							</li>
							<li>
								<a href="https://developers.google.com/startups/" rel="noopener noreferrer" target="_blank">Starup Launchpad</a>
							</li>
							<li>
								<a href="https://developers.google.com/experts/" rel="noopener noreferrer" target="_blank">Google Developers Expert</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className="text-light-black">New Technologies</h6>
						<ul>
							<li>
								<a href="https://www.tensorflow.org/" rel="noopener noreferrer" target="_blank">Tensor Flow</a>
							</li>
							<li>
								<a href="https://developer.android.com/google/index.html" rel="noopener noreferrer" target="_blank">Android</a>
							</li>
							<li>
								<a href="https://developers.google.com/web/progressive-web-apps/" rel="noopener noreferrer" target="_blank">PWA</a>
							</li>
							<li>
								<a href="https://research.google.com/teams/brain/robotics/" rel="noopener noreferrer" target="_blank">Research @ Google</a>
							</li>
						</ul>
					</div>

					<div>
						<h6 className="text-light-black">Quick Links</h6>
						<ul>
							<li>
								<a href="/faq" rel="noopener noreferrer" target="_blank">FAQ (WIP)</a>
							</li>
							<li>
								<a href="/blog" rel="noopener noreferrer" target="_blank">Blog (WIP)</a>
							</li>
							<li>
								<a href="/coc" rel="noopener noreferrer" target="_blank">Code of Conduct (WIP)</a>
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
						<h6 className="text-light-black">Connect</h6>
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

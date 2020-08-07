import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="Navbar">
			<NavLink className="Navbar-Brand" to="/">
				Jobly
			</NavLink>
			<ul className="Navbar-Nav">
				<li>
					<NavLink to="/companies">Companies</NavLink>
				</li>
				<li>
					<NavLink to="/jobs">Jobs</NavLink>
				</li>
				<li>
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li>
					{/* Refactor logic eventually to check for user login and render NavLink to="/logout" here instead */}
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

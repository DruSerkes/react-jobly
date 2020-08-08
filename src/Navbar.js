import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [ isLoggedIn, setisLoggedIn ] = useState(false);
	const history = useHistory();
	const doLogout = () => {
		localStorage.removeItem('jobly-token');
		setisLoggedIn(false);
		history.push('/');
	};

	useEffect(
		() => {
			if (localStorage.getItem('jobly-token')) {
				setisLoggedIn(true);
			}
		},
		[ localStorage ]
	);

	return (
		<div className="Navbar">
			<NavLink className="Navbar-Brand" to="/">
				Jobly
			</NavLink>
			<ul className="Navbar-Nav">
				{isLoggedIn ? (
					<li>
						<NavLink to="/companies">Companies</NavLink>
					</li>
				) : null}
				{isLoggedIn ? (
					<li>
						<NavLink to="/jobs">Jobs</NavLink>
					</li>
				) : null}
				{isLoggedIn ? (
					<li>
						<NavLink to="/profile">Profile</NavLink>
					</li>
				) : null}
				<li>
					{/* Refactor logic eventually to check for user login and render NavLink to="/logout" here instead */}
					{isLoggedIn ? (
						<NavLink to="/" onClick={doLogout}>
							Logout
						</NavLink>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

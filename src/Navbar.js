import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentUser, setCurrentUser }) => {
	const [ isLoggedIn, setisLoggedIn ] = useState(false);
	const history = useHistory();

	const doLogout = () => {
		localStorage.removeItem('jobly-token');
		setCurrentUser(null);
		setisLoggedIn(false);
		history.push('/');
	};

	useEffect(
		() => {
			if (localStorage.getItem('jobly-token')) {
				setisLoggedIn(() => true);
			} else {
				setisLoggedIn(false);
			}
		},
		[ currentUser ]
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

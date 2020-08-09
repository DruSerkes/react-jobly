import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from './Context';
import './Home.css';

// TODO
// 1. Add styles for Profile components
// 2. Add tests for Home, Login, Profile components
// 3. Step 9 - add apply

const Home = () => {
	const { currentUser } = useContext(userContext);

	return (
		<div className="Home">
			<h1>Jobly</h1>
			<p>All the jobs in one, convenient place.</p>
			{currentUser ? (
				<h2>Welcome Back!</h2>
			) : (
				<Link to="/login">
					<button>Log in</button>
				</Link>
			)}
		</div>
	);
};

export default Home;

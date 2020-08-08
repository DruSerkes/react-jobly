import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from './Context';

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

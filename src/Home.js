import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from './Context';

// TODO
// 1. Add tests for Home, Login components
// 2. Add styles for Home, Login components
// 3. Step 7 - useEffect to check for token in localStorage - if it's there - ping the API for user and store in currentUser state
// 4. Check currentUser (useContext) to protect routes to companies/jobs/company/profile

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

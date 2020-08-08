import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Home from './Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/jobs">
				<Jobs />
			</Route>
			<Route exact path="/companies/:handle">
				<Company />
			</Route>
			<Route exact path="/companies">
				<Companies />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/profile">
				{/* <Profile /> */}
				<h1>This is the Profile page</h1>
			</Route>
			<Route exact path="/">
				<Home />
				{/* <h1>This is the Home page</h1> */}
			</Route>
			<Redirect path="/" to="/" />
		</Switch>
	);
};

export default Routes;

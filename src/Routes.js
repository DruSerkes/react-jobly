import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Company from './Company';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/jobs">
				{/* <Jobs /> */}
				<h1>This is the Jobs page</h1>
			</Route>
			<Route exact path="/companies/:handle">
				<Company />
				{/* <h1>This is the Company page</h1> */}
			</Route>
			<Route exact path="/companies">
				{/* <Companies /> */}
				<h1>This is the Companies page</h1>
			</Route>
			<Route exact path="/login">
				{/* <Login /> */}
				<h1>This is the Login page</h1>
			</Route>
			<Route exact path="/profile">
				{/* <Profile /> */}
				<h1>This is the Profile page</h1>
			</Route>
			<Route exact path="/">
				{/* <Home /> */}
				<h1>This is the Home page</h1>
			</Route>
			<Redirect path="/" to="/" />
		</Switch>
	);
};

export default Routes;

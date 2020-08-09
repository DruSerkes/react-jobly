import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

const Routes = ({ currentUser }) => {
	return (
		<Switch>
			<Route exact path="/jobs">
				{currentUser ? <Jobs /> : <Redirect to="/" />}
			</Route>
			<Route exact path="/companies/:handle">
				{currentUser ? <Company /> : <Redirect to="/" />}
			</Route>
			<Route exact path="/companies">
				{currentUser ? <Companies /> : <Redirect to="/" />}
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/profile">
				{currentUser ? <Profile /> : <Redirect to="/" />}
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			<Redirect path="/" to="/" />
		</Switch>
	);
};

export default Routes;

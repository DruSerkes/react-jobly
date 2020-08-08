import React, { useState } from 'react';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

// create a component that renders a div with buttons - login and signup
// onclick, they change state for formView respectively
// the component renders either a login or register form based on this

const Login = () => {
	const [ formView, setFormView ] = useState('login');

	return (
		<div className="Login">
			<div className="Login-Container">
				<div className="Login-Buttons">
					<button onClick={() => setFormView('login')}>Login</button>
					<button onClick={() => setFormView('register')}>Register</button>
				</div>
				{formView === 'login' ? <LoginForm /> : <RegistrationForm />}
			</div>
		</div>
	);
};

export default Login;

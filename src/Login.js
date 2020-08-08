import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

// write a function to pass down to the forms for their handleSubmits to login/register a user

const Login = () => {
	const [ formView, setFormView ] = useState('login');
	const history = useHistory();

	const doLogin = () => {
		history.push('/');
	};

	return (
		<div className="Login">
			<div className="Login-Container">
				<div className="Login-Buttons">
					<button onClick={() => setFormView('login')}>Login</button>
					<button onClick={() => setFormView('register')}>Register</button>
				</div>
				{formView === 'login' ? <LoginForm doLogin={doLogin} /> : <RegistrationForm doLogin={doLogin} />}
			</div>
		</div>
	);
};

export default Login;

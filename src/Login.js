import React, { useState } from 'react';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';



// write a function to pass down to the forms for their handleSubmits to login/register a user
 
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

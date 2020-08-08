import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';
import userContext from './Context';

const Login = () => {
	const [ formView, setFormView ] = useState('login');
	const { setCurrentUser } = useContext(userContext);
	const history = useHistory();

	const doLogin = (values) => {
		setCurrentUser({ ...values });
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

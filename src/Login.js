import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';
import userContext from './Context';
import './Login.css';

const Login = () => {
	const [ formView, setFormView ] = useState('login');
	const { setCurrentUser } = useContext(userContext);
	const history = useHistory();

	const doLogin = (values) => {
		setCurrentUser({ ...values });
		history.push('/');
	};

	const changeForm = (e) => {
		if (formView === 'login') {
			if (e.target.classList.contains('active')) return;
			e.target.classList.toggle('active');
			e.target.previousElementSibling.classList.toggle('active');
			setFormView('register');
		} else {
			if (e.target.classList.contains('active')) return;
			e.target.classList.toggle('active');
			e.target.nextElementSibling.classList.toggle('active');
			setFormView('login');
		}
	};

	return (
		<div className="Login">
			<div className="Login-Container">
				<div className="Login-Buttons">
					<button className="login active" onClick={changeForm}>
						Login
					</button>
					<button className="register" onClick={changeForm}>
						Register
					</button>
				</div>
				{formView === 'login' ? <LoginForm doLogin={doLogin} /> : <RegistrationForm doLogin={doLogin} />}
			</div>
		</div>
	);
};

export default Login;

import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import loginSchema from './LoginFormSchema';
import JoblyApi from '../JoblyApi';

const LoginForm = ({ doLogin }) => {
	const INITIAL_VALUES = {
		username : '',
		password : ''
	};

	const handleLogin = async (values, { setSubmitting }) => {
		const token = await JoblyApi.login(values);
		localStorage.setItem('jobly-token', token);
		setSubmitting(false);
		doLogin(values);
	};

	return (
		<div className="LoginForm">
			<Formik initialValues={INITIAL_VALUES} validationSchema={loginSchema} onSubmit={handleLogin}>
				<Form>
					<TextInput label="username" name="username" type="text" />
					<TextInput label="password" name="password" type="password" />
					<button>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;

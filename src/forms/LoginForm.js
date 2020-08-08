import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import loginSchema from './LoginFormSchema';

const LoginForm = () => {
	const INITIAL_VALUES = {
		username : '',
		password : ''
	};

	const handleLogin = (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false);
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

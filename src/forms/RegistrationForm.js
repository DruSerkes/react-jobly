import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import registrationSchema from './registrationSchema';
import JoblyApi from '../JoblyApi';

const RegistrationForm = ({ doLogin }) => {
	const INITIAL_VALUES = {
		username   : '',
		password   : '',
		first_name : '',
		last_name  : '',
		email      : ''
	};

	const handleRegister = async (values, { setSubmitting }) => {
		console.log(values);
		const token = await JoblyApi.register(values);
		localStorage.setItem('jobly-token', token);
		setSubmitting(false);
		doLogin();
		// there will be one more thing here to keep currentUser in state
	};

	return (
		<div className="RegistrationForm">
			<Formik initialValues={INITIAL_VALUES} validationSchema={registrationSchema} onSubmit={handleRegister}>
				<Form>
					<TextInput label="username" name="username" type="text" />
					<TextInput label="password" name="password" type="password" />
					<TextInput label="first_name" name="first_name" type="text" />
					<TextInput label="last_name" name="last_name" type="text" />
					<TextInput label="email" name="email" type="email" />
					<button>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;

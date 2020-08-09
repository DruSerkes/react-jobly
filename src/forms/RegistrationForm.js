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
		const token = await JoblyApi.register(values);
		localStorage.setItem('jobly-token', token);
		setSubmitting(false);
		doLogin(values);
	};

	return (
		<div className="RegistrationForm">
			<Formik initialValues={INITIAL_VALUES} validationSchema={registrationSchema} onSubmit={handleRegister}>
				<Form>
					<TextInput label="Username" name="username" type="text" />
					<TextInput label="Password" name="password" type="password" />
					<TextInput label="First name" name="first_name" type="text" />
					<TextInput label="Last name" name="last_name" type="text" />
					<TextInput label="Email" name="email" type="email" />
					<button>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;

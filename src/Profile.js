import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import TextInput from './forms/TextInput';
import userContext from './Context';
import JoblyApi from './JoblyApi';
import profileSchema from './forms/profileSchema';

const Profile = () => {
	const { currentUser, setCurrentUser } = useContext(userContext);

	const INITIAL_VALUES = {
		first_name : currentUser.first_name || '',
		last_name  : currentUser.last_name || '',
		email      : currentUser.email || '',
		photo_url  : currentUser.photo_url || '',
		password   : ''
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		for (let value in values) {
			if (!values[value]) delete values[value];
		}
		values.username = currentUser.username;
		setSubmitting(false);
		const user = await JoblyApi.updateUser(values);
		resetForm();
		setCurrentUser({ ...user });
	};

	return (
		<div className="Profile">
			<h2>Profile</h2>
			<Formik initialValues={INITIAL_VALUES} validationSchema={profileSchema} onSubmit={handleSubmit}>
				<Form>
					<h4>Username</h4>
					<p>{currentUser.username}</p>
					<TextInput label="First name" name="first_name" type="text" />
					<TextInput label="Last name" name="last_name" type="text" />
					<TextInput label="Email" name="email" type="email" />
					<TextInput label="Photo URL" name="photo_url" type="url" />
					<TextInput label="Re-enter Password" name="password" type="password" />
					<button type="submit">Save Changes</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Profile;

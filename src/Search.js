import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './forms/TextInput';

const Search = ({ handleSearch }) => {
	const INITIAL_VALUES = {
		search : ''
	};

	return (
		<Formik initialValues={INITIAL_VALUES} onSubmit={handleSearch}>
			<Form>
				<TextInput placeholder="Enter search term..." name="search" />
				<button>Submit</button>
			</Form>
		</Formik>
	);
};

export default Search;

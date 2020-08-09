import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './forms/TextInput';
import './Search.css';

const Search = ({ handleSearch }) => {
	const INITIAL_VALUES = {
		search : ''
	};

	return (
		<div className="Search">
			<Formik initialValues={INITIAL_VALUES} onSubmit={handleSearch}>
				<Form>
					<TextInput placeholder="Enter search term..." name="search" />
					<button>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Search;

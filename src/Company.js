import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';
import Jobcard from './JobCard';
import './Company.css';

const Company = () => {
	const [ company, setCompany ] = useState(null);
	const { handle } = useParams();

	useEffect(
		() => {
			const getCompany = async () => {
				let company = await JoblyApi.getCompany(handle);
				setCompany({ ...company });
			};
			getCompany();
		},
		[ handle ]
	);

	if (!company) {
		return <h2>Loading company data</h2>;
	}

	return (
		<div className="Company">
			<h3>{company.name}</h3>
			<p>{company.description}</p>
			<ul>
				{company.jobs.map((job) => (
					<li key={job.id}>
						<Jobcard job={job} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Company;

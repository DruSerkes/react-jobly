import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

const Company = () => {
	const [ company, setCompany ] = useState(null);
	const { handle } = useParams();

	useEffect(() => {
		const getCompany = async () => {
			let company = await JoblyApi.getCompany(handle);
			setCompany({ ...company });
		};
		getCompany();
	}, []);

	if (!company) {
		return <h2>Loading company data</h2>;
	}

	return (
		<div className="Company">
			<h2>{company.name}</h2>
			<p>{company.description}</p>
			<h4>Render jobcard components</h4>
			{company.jobs.map((job) => <p>Jobcard for job: {job.title}</p>)}
			{/* {company.jobs.map((job) => <Jobcard key={job.handle} job={job}/>)} */}
		</div>
	);
};

export default Company;

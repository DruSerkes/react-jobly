import React from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

const Company = () => {
	const handle = useParams;
	const company = JoblyApi.getCompany(handle);
	console.log(company);
	return (
		<div className="Company">
			<h2>{company.name}</h2>
			<p>{company.description}</p>
			<h4>Render jobcard components</h4>
			{company.jobs.map((job) => <p>Jobcard for job: {job.title}</p>)}
			{/* {company.jobs.map((job) => <Jobcard job={job}/>)} */}
		</div>
	);
};

export default Company;

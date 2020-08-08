import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import './Jobs.css';

const Jobs = () => {
	const [ jobs, setJobs ] = useState(null);

	useEffect(() => {
		const getJobs = async () => {
			let jobs = await JoblyApi.getAllJobs();
			setJobs([ ...jobs ]);
		};
		getJobs();
	}, []);

	if (!jobs) {
		return <h2>Loading jobs &hellip;</h2>;
	}

	return (
		<div className="Jobs">
			<ul>
				{jobs.map((job) => (
					<li key={job.id}>
						<JobCard job={job} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Jobs;

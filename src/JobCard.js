import React, { useContext } from 'react';
import './JobCard.css';
import userContext from './Context';
import JoblyApi from './JoblyApi';

const JobCard = ({ job }) => {
	const { currentUser, setCurrentUser } = useContext(userContext);
	const handleApply = async () => {
		try {
			const [ message, updatedUser ] = await JoblyApi.apply(job, currentUser);
			if (message === 'applied') setCurrentUser(updatedUser);
		} catch (e) {
			console.log(e);
		}
	};

	currentUser.jobs.forEach((j) => {
		if (j.id === job.id) {
			job.applied = true;
		}
	});

	return (
		<div className="JobCard">
			<div className="JobCard-Info">
				<h3>{job.title}</h3>
				<ul>
					<li>Salary: {job.salary}</li>
					<li>Equity: {job.equity}</li>
				</ul>
			</div>
			{job.applied ? (
				<button className="JobCard-Apply disabled" onClick={() => null}>
					Applied
				</button>
			) : (
				<button className="JobCard-Apply" onClick={handleApply}>
					Apply
				</button>
			)}
		</div>
	);
};

export default JobCard;

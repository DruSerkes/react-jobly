import React from 'react';
import './JobCard.css';

const JobCard = ({ job, handleApply }) => {
	return (
		<div className="JobCard">
			<div className="JobCard-Info">
				<h3>{job.title}</h3>
				<ul>
					<li>Salary: {job.salary}</li>
					<li>Equity: {job.equity}</li>
				</ul>
			</div>

			<button className="JobCard-Apply">Apply</button>

			{/* add onclick={handleApply} */}
		</div>
	);
};

export default JobCard;

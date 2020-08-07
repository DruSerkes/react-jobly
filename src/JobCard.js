import React from 'react';

const JobCard = ({ job, handleApply }) => {
	return (
		<div className="JobCard">
			<h3>{job.title}</h3>
			<ul>
				<li>{job.salary}</li>
				<li>{job.equity}</li>
			</ul>
			{/* add onclick={handleApply} */}
			<button className="JobCard-Apply">Apply</button>
		</div>
	);
};

export default JobCard;

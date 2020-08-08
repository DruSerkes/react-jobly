import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
	return (
		<div className="CompanyCard">
			<h3>
				<span>{company.name}</span>
				<img src={company.logo_url} alt={company.name} />
			</h3>
			<p>{company.description}</p>
		</div>
	);
};

export default CompanyCard;

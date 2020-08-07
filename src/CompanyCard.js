import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
	return (
		<div className="CompanyCard">
			<h3>{company.name}</h3>
			<img src={company.logo_url} alt={company.name} />
			<p>{company.description}</p>
		</div>
	);
};

export default CompanyCard;

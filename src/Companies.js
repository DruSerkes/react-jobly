import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
// import './Companies.css';

const Companies = () => {
	const [ companies, setCompanies ] = useState(null);

	useEffect(() => {
		const getCompanies = async () => {
			let companies = await JoblyApi.getAllCompanies();
			setCompanies([ ...companies ]);
		};
		getCompanies();
	}, []);

	if (!companies) {
		return <h2>Loading Companies &hellip;</h2>;
	}

	return (
		<div className="Companies">
			{/* {companies.map((company) => <p>{company.name}</p>)} */}
			{companies.map((company) => <CompanyCard company={company} key={company.handle} />)}
		</div>
	);
};

export default Companies;

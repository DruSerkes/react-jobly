import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
// import Companycard from './CompanyCard';
// import './Companies.css';

const Companies = () => {
	const [ companies, setCompanies ] = useState(null);

	useEffect(() => {
		const getCompanies = async () => {
			let companies = await JoblyApi.getCompanies();
			setCompanies({ ...companies });
		};
		getCompanies();
	}, []);

	if (!companies) {
		return <h2>Loading Companies &hellip;</h2>;
	}

	return (
		<div className="Companies">
			{companies.map((company) => <h1>{company.name}</h1>)}
			{/* {companies.map(company => <CompanyCard company={company} /> */}
		</div>
	);
};

export default Companies;

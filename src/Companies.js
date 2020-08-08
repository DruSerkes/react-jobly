import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import { Link } from 'react-router-dom';
// import './Companies.css';
// TODO ^^

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
			<ul>
				{companies.map((company) => (
					<li key={company.handle}>
						<Link to={`/companies/${company.handle}`}>
							<CompanyCard company={company} />{' '}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Companies;

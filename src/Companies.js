import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import { Link } from 'react-router-dom';
import Search from './Search';
import './Companies.css';

const Companies = () => {
	const [ companies, setCompanies ] = useState(null);

	useEffect(() => {
		const getCompanies = async () => {
			let companies = await JoblyApi.getAllCompanies();
			setCompanies([ ...companies ]);
		};
		getCompanies();
	}, []);

	const handleSearch = async (values, { setSubmitting }) => {
		let companies = await JoblyApi.getAllCompanies(values);
		setCompanies([ ...companies ]);
		setSubmitting(false);
	};

	if (!companies) {
		return <h2>Loading Companies &hellip;</h2>;
	}

	return (
		<div className="Companies">
			<Search handleSearch={handleSearch} />
			{!companies.length ? (
				<p className="Companies-Sorry">Sorry! No companies match your search</p>
			) : (
				<ul>
					{companies.map((company) => (
						<li key={company.handle}>
							<Link to={`/companies/${company.handle}`}>
								<CompanyCard company={company} />{' '}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Companies;

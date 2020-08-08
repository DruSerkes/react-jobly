import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from '../CompanyCard';

describe('CompanyCard tests', () => {
	const mockCompany = {
		name        : 'mock',
		description : 'this is a mock company',
		logo_url    : 'https://www.test.com/img.png'
	};

	it('renders without breaking', () => {
		render(<CompanyCard company={mockCompany} />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<CompanyCard company={mockCompany} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('contains name and description', () => {
		const { getByText } = render(<CompanyCard company={mockCompany} />);
		const name = getByText(mockCompany.name);
		const description = getByText(mockCompany.description);
		expect(name).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	});
});

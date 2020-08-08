import React from 'react';
import { render } from '@testing-library/react';
import JobCard from '../JobCard';

describe('JobCard tests', () => {
	const mockJob = {
		title  : 'tester',
		salary : 120000,
		equity : 0.5
	};

	it('renders without breaking', () => {
		render(<JobCard job={mockJob} />);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(<JobCard job={mockJob} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('contains job info', () => {
		const { getByText } = render(<JobCard job={mockJob} />);
		const title = getByText(mockJob.title);
		const salary = getByText(`Salary: ${mockJob.salary}`);
		const equity = getByText(`Equity: ${mockJob.equity}`);
		expect(title).toBeInTheDocument();
		expect(salary).toBeInTheDocument();
		expect(equity).toBeInTheDocument();
	});
});

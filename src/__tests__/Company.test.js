import React from 'react';
import { render } from '@testing-library/react';
import Company from '../Company';
import { MemoryRouter, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import JoblyApi from '../JoblyApi';

describe('Company tests', () => {
	it('renders without crashing', () => {
		jest.mock('react-router', () => ({
			useParams : jest.fn().mockReturnValue({ handle: 'anderson-arias-and-morrow' })
		}));

		render(
			<MemoryRouter initialEntries={[ '/companies/anderson-arias-and-morrow' ]}>
				<Route exact path="/companies/:handle">
					<Company />
				</Route>
			</MemoryRouter>
		);
	});

	it('matches snapshot', () => {
		jest.mock('react-router', () => ({
			useParams : jest.fn().mockReturnValue({ handle: 'anderson-arias-and-morrow' })
		}));
		jest.mock('../JoblyApi', () => ({
			getCompany : jest.fn().mockReturnValue({ name: 'Anderson', description: 'testing them' })
		}));
		const { getByText, asFragment } = render(
			<MemoryRouter initialEntries={[ '/companies/anderson-arias-and-morrow' ]}>
				<Route exact path="/companies/:handle">
					<Company />
				</Route>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
		// expect(getByText('Anderson Arias and Morrow')).toBeInTheDocument();
	});
});

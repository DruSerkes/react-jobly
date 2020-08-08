/* TODO pick back up here with
		- tests for Company and Companies
        - then create Companies.css
        - then step 5
*/
import React from 'react';
import { render } from '@testing-library/react';
import Company from '../Company';
import { MemoryRouter, Route } from 'react-router-dom';
import JoblyApi from '../JoblyApi';

describe('Company tests', () => {
	it('renders without crashing', () => {
		render(<Company />);
	});

	it('Shows a company', () => {
		// const mockCompany = jest
		// 	.spyOn(JoblyApi, getCompany('test'))
		// 	.mockImplementation(() => ({ handle: 'test', name: 'test', description: 'it is a test' }));
		// const mockHandle = jest.spyOn(useParams).mockImplementation(() => ({ test }));
		jest.mock('react-router-dom', () => ({
			useParams : jest.fn().mockReturnValue({ handle: 'anderson-arias-and-morrow' })
		}));
		const { getByText, asFragment } = render(
			<MemoryRouter initialEntries={[ '/companies/anderson-arias-and-morrow' ]}>
				<Route exact path="/companies/:handle">
					<Company />
				</Route>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

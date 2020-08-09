import React from 'react';
import userContext from '../Context';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Login tests', () => {
	it('renders without crashing', () => {
		let currentUser = null;

		render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</userContext.Provider>
		);
	});

	it('matches snapshot', () => {
		let currentUser = null;

		const { asFragment } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('shows a login form', () => {
		let currentUser = null;
		const { getByText } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(getByText('Submit')).toBeInTheDocument();
	});
});

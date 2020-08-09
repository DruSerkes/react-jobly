import React from 'react';
import userContext from '../Context';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../Profile';

describe('Profile tests', () => {
	it('renders without crashing', () => {
		let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test',
			logo_url   : 'test'
		};

		render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</userContext.Provider>
		);
	});

	it('matches snapshot', () => {
		let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test',
			logo_url   : 'test'
		};

		const { asFragment } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('shows user Profile', () => {
		let currentUser = {
			username   : 'test',
			first_name : 'test',
			last_name  : 'test',
			email      : 'test',
			logo_url   : 'test'
		};
		const { getByText } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Profile />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(getByText('Profile')).toBeInTheDocument();
	});
});

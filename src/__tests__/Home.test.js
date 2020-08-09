import React, { useContext } from 'react';
import userContext from '../Context';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home tests', () => {
	it('renders without crashing', () => {
		let currentUser = null;

		render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Home />
				</MemoryRouter>
			</userContext.Provider>
		);
	});

	it('matches snapshot', () => {
		let currentUser = null;

		const { asFragment } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Home />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('welcomes back if currentUser', () => {
		let currentUser = true;
		const { getByText } = render(
			<userContext.Provider value={{ currentUser }}>
				<MemoryRouter>
					<Home />
				</MemoryRouter>
			</userContext.Provider>
		);
		expect(getByText('Welcome Back!')).toBeInTheDocument();
	});
});

import React from 'react';
import { render } from '@testing-library/react';
import Companies from '../Companies';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Companies tests', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter initialEntries={[ '/companies/' ]}>
				<Route exact path="/companies/">
					<Companies />
				</Route>
			</MemoryRouter>
		);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={[ '/companies/' ]}>
				<Route exact path="/companies/">
					<Companies />
				</Route>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

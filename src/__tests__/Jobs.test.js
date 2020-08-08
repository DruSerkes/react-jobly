import React from 'react';
import { render } from '@testing-library/react';
import Jobs from '../Jobs';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Jobs tests', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter initialEntries={[ '/jobs/' ]}>
				<Route exact path="/jobs/">
					<Jobs />
				</Route>
			</MemoryRouter>
		);
	});

	it('matches snapshot', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={[ '/jobs/' ]}>
				<Route exact path="/jobs/">
					<Jobs />
				</Route>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

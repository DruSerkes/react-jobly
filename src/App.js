import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';
import userContext from './Context';
import JoblyApi from './JoblyApi';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const checkCurrentUser = async () => {
			if (localStorage.getItem('jobly-token')) {
				const token = localStorage.getItem('jobly-token');
				const { username, first_name, last_name, email, photo_url, jobs } = await JoblyApi.getUser(token);
				setCurrentUser({ username, first_name, last_name, email, photo_url, jobs });
			}
		};
		checkCurrentUser();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<userContext.Provider value={{ currentUser, setCurrentUser }}>
					<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
					<Routes currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</userContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;

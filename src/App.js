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
		if (localStorage.getItem('jobly-token')) {
		}
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<userContext.Provider value={{ currentUser, setCurrentUser }}>
					<Navbar />
					<Routes />
				</userContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;

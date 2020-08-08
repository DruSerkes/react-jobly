import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';
import userContext from './Context';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);

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

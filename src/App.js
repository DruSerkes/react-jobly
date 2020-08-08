import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;

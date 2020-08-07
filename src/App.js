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
			{/* Wrap Browser Router around app in index */}
			{/* Render Routes Component here  */}
		</div>
	);
}

export default App;

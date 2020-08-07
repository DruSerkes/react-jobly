import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Testing</h1>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			{/* Wrap Browser Router around app in index */}
			{/* Render Routes Component here  */}
		</div>
	);
}

export default App;

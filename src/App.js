import React, { Component } from 'react';
import rings from './img/rings.png';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={rings} className="App-logo" alt="logo" />
					<h1 className="App-title">Angélica e Rodrigo</h1>
				</header>
				<p className="App-intro">
					<div>14 de julho de 2018</div>
					<div style={{marginTop:'70px', fontSize:'40px'}}>Novidades Em Breve</div>
				</p>
			</div>
		);
	}
}

export default App;

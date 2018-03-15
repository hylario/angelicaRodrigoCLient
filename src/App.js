import React, { Component } from 'react';

import Auth from './Auth';
import Routes from './Routes';
import rings from './img/rings.png';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		let token = sessionStorage.getItem('token');
		if(token){
			let user = JSON.parse(sessionStorage.getItem('user'));
			Auth.dispatch({type: 'LOGIN', token, user});
		}
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={rings} className="App-logo" alt="logo" />
					<h1 className="App-title">Angélica e Rodrigo</h1>
				</header>
				<div className="App-intro">
					<div>14 de julho de 2018</div>
					<div style={{marginTop:'70px', fontSize:'40px'}}>Novidades Em Breve</div>
				</div>
				<Routes name="Angélica e Rodrigo"/>
			</div>
		);
	}
}

export default App;

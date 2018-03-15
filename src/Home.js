import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import Auth from './Auth';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}
	logout = () => {
		Auth.dispatch({type: 'LOGOUT'});
		this.setState({redirect: true});
	}
	render() {

		if (!Auth.getState().authenticated) {
		    return (<Redirect to={'/'}/>);
		}

		let userInfo = '';
		if(Auth.getState().authenticated){
			userInfo = (
				<div className="UserInfo">
					Olá, {Auth.getState().user.name}
					<div>
						<img src={Auth.getState().user.picture.data.url}
							width={Auth.getState().user.picture.data.width}
							height={Auth.getState().user.picture.data.height}
						/>
					</div>
				</div>
			);
		}

		return (
			<div className="Home">
				{userInfo}
				<div className="FacebookButtonDiv">
					<button className="FacebookButton" onClick={this.logout}>Logout</button>
				</div>
			</div>
		);
	}
}

export default Home;

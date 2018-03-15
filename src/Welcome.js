import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import Auth from './Auth';

import './Welcome.css';

const WEBROOT = 'http://localhost:5000/';
// const WEBROOT = 'https://angelica-rodrigo.herokuapp.com/';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginError: false,
			redirect: false
		};
	}
	responseFacebook = (userData) => {
		axios.post(WEBROOT + 'signup', userData)
			.then(response => {
				if(response.data.success){
					Auth.dispatch({type: 'LOGIN', token: response.data.token, user: response.data.user});
					this.setState({redirect: true});
				}else{
					alert(response.data.message);
				}
			})
			.catch(error => {
				console.log(error);
			})
		;
	}
	render() {

		if (Auth.getState().authenticated) {
		    return (<Redirect to={'/home'}/>)
		}

		return (
			<div>
				<div className="FacebookButtonDiv">
					<FacebookLogin
					    appId="174196893209805"
					    fields="name,email,picture"
					    callback={this.responseFacebook}
					    textButton="Entrar com Facebook"
					    cssClass="FacebookButton"
					  />
			  	</div>
			</div>
		);
	}
}

export default Welcome;

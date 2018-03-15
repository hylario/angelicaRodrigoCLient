import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './Welcome';
import Home from './Home';
import NotFound from './NotFound';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter >
				<Switch>
					<Route exact path="/" component={Welcome}/>
					<Route path="/home" component={Home}/>
					<Route path="*" component={NotFound}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;

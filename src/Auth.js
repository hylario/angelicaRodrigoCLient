import { createStore } from 'redux';

const auth = (state, action) => {
	switch(action.type){
		case "LOGIN":
			sessionStorage.setItem('token', action.token);
			sessionStorage.setItem('user', JSON.stringify(action.user));
			return {
				authenticated: true,
				token: action.token,
				user: action.user
			};
		case "LOGOUT":
			sessionStorage.removeItem('token');
			sessionStorage.removeItem('user');
			return {authenticated: false};
		default:
			return {authenticated: false};
	}
};

const Auth = createStore(auth);

export default Auth;

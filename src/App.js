import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './features/MainPage/MainPage';
import Signup from './features/authorization/Signup';
import Signin from './features/authorization/Signin';
import Header from './features/header/Header';

function App() {
	return (
		<div className='container'>
			<Header />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/signup' component={Signup} />
				<Route path='/signin' component={Signin} />
			</Switch>
		</div>
	);
}

export default App;

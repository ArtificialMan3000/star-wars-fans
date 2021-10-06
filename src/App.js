import { Switch, Route } from 'react-router-dom';
import Header from './features/header/Header';
import Signin from './features/authorization/Signin';
import Signup from './features/authorization/Signup';
import MainPage from './features/MainPage/MainPage';
import { useSelector } from 'react-redux';

function App() {
	const authUser = useSelector(state => state.auth.user);
	console.log(authUser);

	return (
		<div className='container'>
			<Header />
			<Switch>
				<Route path='/signin' component={Signin} />
				<Route path='/signup' component={Signup} />
				<Route exact path='/' component={MainPage} />
			</Switch>
		</div>
	);
}

export default App;

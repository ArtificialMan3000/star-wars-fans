import { useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import IsLoggedHead from './features/header/IsLoggedHead';
import NotLoggedHead from './features/header/NotLoggedHead';
import Signin from './features/authorization/Signin';
import Signup from './features/authorization/Signup';
import MainPage from './features/mainPage/MainPage';
import Favorites from './features/favorites/Favorites';
import History from './features/history/History';
import { FilmsList } from './features/films/filmsList/FilmsList';
import { SingleFilm } from './features/films/singleFilm/SingleFilm';
import NotFound from './features/notFound/NotFound';
import ProtectedRoute from './auxiliary/routeWrappers/ProtectedRoute';
import AuthRoute from './auxiliary/routeWrappers/AuthRoute';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurrUserThunk } from './features/authorization/authThunks';

function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(checkCurrUserThunk()), [dispatch]);

    const { userIsLogged, userName } = useSelector((state) => state.auth.user);
    console.log(userIsLogged, userName);

    return (
        <div className="container">
            {userIsLogged ? (
                <IsLoggedHead userName={userName} />
            ) : (
                <NotLoggedHead />
            )}
            <Switch>
                <AuthRoute exact path="/signin" component={Signin} />
                <AuthRoute exact path="/signup" component={Signup} />
                <AuthRoute exact path="/films" component={FilmsList} />
                <AuthRoute exact path="/film/:id" component={SingleFilm} />
                <AuthRoute exact path="/" component={MainPage} />
                <AuthRoute exact path="/404" component={NotFound} />
                <ProtectedRoute exact path="/favorites" component={Favorites} />
                <ProtectedRoute exact path="/history" component={History} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;

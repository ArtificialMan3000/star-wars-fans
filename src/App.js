import { Switch, Redirect, Route } from 'react-router-dom';
import IsLoggedHead from './features/header/IsLoggedHead';
import NotLoggedHead from './features/header/NotLoggedHead';
import Signin from './features/authorization/Signin';
import Signup from './features/authorization/Signup';
import FilmsList from './features/catalog/films/filmsList/FilmsList';
import SingleFilm from './features/catalog/films/singleFilm/SingleFilm';
import PersonsList from './features/catalog/persons/personsList/PersonsList';
import SinglePerson from './features/catalog/persons/singlePerson/SinglePerson';
import PlanetsList from './features/catalog/planets/planetsList/PlanetsList';
import SinglePlanet from './features/catalog/planets/singlePlanet/SinglePlanet';
import MainPage from './features/mainPage/MainPage';
import Favorites from './features/favorites/Favorites';
import History from './features/history/History';
import { Search } from './features/search/Search';
import NotFound from './features/notFound/NotFound';
import ProtectedRoute from './auxiliary/routeWrappers/ProtectedRoute';
import AuthRoute from './auxiliary/routeWrappers/AuthRoute';
import { useSelector } from 'react-redux';

function App() {
    const { userIsLogged, userName } = useSelector((state) => state.auth.user);

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
                <ProtectedRoute exact path="/films" component={FilmsList} />
                <ProtectedRoute
                    exact
                    path="/films/:id"
                    component={SingleFilm}
                />
                <ProtectedRoute exact path="/people" component={PersonsList} />
                <ProtectedRoute
                    exact
                    path="/people/:id"
                    component={SinglePerson}
                />
                <ProtectedRoute exact path="/planets" component={PlanetsList} />
                <ProtectedRoute
                    exact
                    path="/planets/:id"
                    component={SinglePlanet}
                />
                <Route exact path="/" component={MainPage} />
                <ProtectedRoute exact path="/favorites" component={Favorites} />
                <ProtectedRoute exact path="/history" component={History} />
                <ProtectedRoute exact path="/search" component={Search} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;

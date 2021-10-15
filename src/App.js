import { Switch, Redirect, Route } from 'react-router-dom';
import { IsLoggedHead } from './features/header/IsLoggedHead';
import { NotLoggedHead } from './features/header/NotLoggedHead';
import { Signin } from './features/authorization/Signin';
import { Signup } from './features/authorization/Signup';
import { Category } from './features/catalog/category/Category';
import { SingleItem } from './features/catalog/item/SingleItem';
import { MainPage } from './features/mainPage/MainPage';
import { Favorites } from './features/favorites/Favorites';
import { History } from './features/history/History';
import { Search } from './features/search/Search';
import { NotFound } from './features/notFound/NotFound';
import { ProtectedRoute } from './auxiliary/routeWrappers/ProtectedRoute';
import { AuthRoute } from './auxiliary/routeWrappers/AuthRoute';
import { useSelector } from 'react-redux';
import { Footer } from './features/footer/Footer';

export function App() {
    const { userIsLogged, userName } = useSelector((state) => state.auth.user);

    return (
        <div className="container">
            {userIsLogged ? (
                <IsLoggedHead userName={userName} />
            ) : (
                <NotLoggedHead />
            )}
            <Switch>
                <Route exact path="/" component={MainPage} />
                <AuthRoute exact path="/signin" component={Signin} />
                <AuthRoute exact path="/signup" component={Signup} />
                <ProtectedRoute
                    exact
                    path="/catalog/:type"
                    component={Category}
                />
                <ProtectedRoute
                    exact
                    path="/catalog/:type/:id"
                    component={SingleItem}
                />
                <ProtectedRoute exact path="/favorites" component={Favorites} />
                <ProtectedRoute exact path="/history" component={History} />
                <ProtectedRoute exact path="/search" component={Search} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
            <Footer />
        </div>
    );
}

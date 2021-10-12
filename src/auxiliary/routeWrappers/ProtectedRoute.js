import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export function ProtectedRoute({ component: Component, ...rest }) {
    const { userIsLogged } = useSelector((state) => state.auth.user);

    return (
        <Route
            {...rest}
            render={(props) => {
                return userIsLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                );
            }}
        ></Route>
    );
}

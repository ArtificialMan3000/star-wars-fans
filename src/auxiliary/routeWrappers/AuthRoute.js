import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { checkCurrUserThunk } from '../../features/authorization/authThunks';

export default function AuthRoute({ component: Component, ...rest }) {
    const dispatch = useDispatch();
    useEffect(() => dispatch(checkCurrUserThunk()), [dispatch]);
    const { userIsLogged } = useSelector((state) => state.auth.user);

    return (
        <Route
            {...rest}
            render={(props) => {
                return !userIsLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
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

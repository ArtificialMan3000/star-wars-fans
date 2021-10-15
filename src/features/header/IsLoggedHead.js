import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutUserThunk } from '../authorization/authThunks';

export function IsLoggedHead({ userName }) {
    const dispatch = useDispatch();

    return (
        <nav className="header">
            <ul>
                <li>
                    <Link
                        to="/"
                        style={{
                            padding: '0.1rem 0.1rem',
                            color: 'black',
                            border: 'solid',
                        }}
                    >
                        {userName}
                    </Link>
                </li>
                <li>
                    <Link to="/catalog/films">Фильмы</Link>
                </li>
                <li>
                    <Link to="/catalog/people">Персонажи</Link>
                </li>
                <li>
                    <Link to="/catalog/planets">Планеты</Link>
                </li>
                <li>
                    <Link to="/favorites">Избранное</Link>
                </li>
                <li>
                    <Link to="/history">История</Link>
                </li>
                <li onClick={() => dispatch(logOutUserThunk())}>
                    <Link to="/signin" style={{ color: 'darkbrown' }}>
                        Выход
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

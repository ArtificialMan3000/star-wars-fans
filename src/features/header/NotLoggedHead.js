import React from 'react';
import { Link } from 'react-router-dom';

export function NotLoggedHead() {
    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/" style={{ marginRight: '5rem' }}>
                        logo
                    </Link>
                </li>
                <li>
                    <Link to="/signin">Вход</Link>
                </li>
                <li>
                    <Link to="/signup">Регистрация</Link>
                </li>
            </ul>
        </nav>
    );
}

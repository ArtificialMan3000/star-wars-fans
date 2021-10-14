import React from 'react';
import { Link } from 'react-router-dom';

export function NotLoggedHead() {
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
                        Star Wars Fans
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

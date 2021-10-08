import React from 'react';
import { Link } from 'react-router-dom';

export default function NotLoggedHead() {
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
            <ul className="catalog-nav">
                <li>
                    <Link to="/films">Фильмы</Link>
                </li>
                <li>
                    <Link to="/films">Персонажи</Link>
                </li>
                <li>
                    <Link to="/films">Планеты</Link>
                </li>
            </ul>
        </nav>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

// Единица списка элементов
export function FilmListItem(props) {
    return (
        <div className="film-item">
            <h3>{props.title}</h3>
            <Link to={`/film/${props.filmId}`}>Подробнее</Link>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

// Единица списка элементов
export function PersonListItem(props) {
    return (
        <div className="person-item">
            <h3>{props.name}</h3>
            <Link to={`/people/${props.personId}`}>Подробнее</Link>
        </div>
    );
}

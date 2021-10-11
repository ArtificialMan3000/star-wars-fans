import React from 'react';
import { Link } from 'react-router-dom';

// Единица списка элементов
export function PlanetListItem(props) {
    return (
        <div className="planet-item">
            <h3>{props.name}</h3>
            <Link to={`/planets/${props.planetId}`}>Подробнее</Link>
        </div>
    );
}

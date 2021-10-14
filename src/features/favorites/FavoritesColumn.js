import React from 'react';
import capitalize from 'lodash.capitalize';

const FavoritesColumn = (props) => {
    const favoritesList = props.list.map((item) => (
        <li key={`${props.type}/${item.itemId}`}>
            <a href={`${props.type}/${item.itemId}`}>{item.title}</a>
        </li>
    ));
    return (
        <div className="favorites-column">
            <h2>{capitalize(props.type)}:</h2>
            <ul>{favoritesList}</ul>
        </div>
    );
};

export { FavoritesColumn };

import React from 'react';
import style from './favorites.module.css';
import capitalize from 'lodash.capitalize';

const FavoritesColumn = (props) => {
    const favoritesList = props.list.map((id) => (
        <li key={`${props.type}/${id}`}>
            <a href={`${props.type}/${id}`}>{id.title || id.name}</a>
        </li>
    ));
    return (
        <div className={style.favoritesColumn}>
            <h2>{capitalize(props.type)}</h2>
            <ul className={style.favoritesList}>{favoritesList}</ul>
        </div>
    );
};

export { FavoritesColumn };

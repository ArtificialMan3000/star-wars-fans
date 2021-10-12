import React from 'react';

const FavoriteButton = (props) => {
    return (
        <button disabled={props.disabled} type="button">
            Добавить в избранное
        </button>
    );
};

export { FavoriteButton };

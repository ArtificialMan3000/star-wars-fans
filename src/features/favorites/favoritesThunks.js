import {
    loading,
    idle,
    addToFavorites,
    removeFromFavorites,
} from '../authorization/authSlice';

export function setFavoritesStateThunk({ films, people, planets }) {
    return function (dispatch) {
        dispatch(addToFavorites({ type: 'films', itemObj: films }));
        dispatch(addToFavorites({ type: 'people', itemObj: people }));
        dispatch(addToFavorites({ type: 'planets', itemObj: planets }));
    };
}

export function addToFavoritesThunk(login, type, itemId, title) {
    return function (dispatch) {
        dispatch(loading());

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        let item = {
            itemId,
            title,
        };

        data.favorites[type].push(item);
        localStorage.setItem(login, JSON.stringify(data));

        item = [item];

        dispatch(addToFavorites({ type, itemObj: item }));
        dispatch(idle());
    };
}

export function removeFromFavoritesThunk(login, type, index) {
    return function (dispatch) {
        dispatch(loading());

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        data.favorites[type].splice(index, 1);
        localStorage.setItem(login, JSON.stringify(data));

        dispatch(removeFromFavorites({ type, index }));
        dispatch(idle());
    };
}

import {
    loading,
    idle,
    addToFavorites,
    removeFromFavorites,
} from '../authorization/authSlice';

export function setFavoritesStateThunk({ films, people, planets }) {
    return function (dispatch) {
        dispatch(addToFavorites({ type: 'films', id: films }));
        dispatch(addToFavorites({ type: 'people', id: people }));
        dispatch(addToFavorites({ type: 'planets', id: planets }));
    };
}

export function addToFavoritesThunk(login, type, itemId) {
    return function (dispatch) {
        dispatch(loading());

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        data.favorites[type].push(itemId);
        localStorage.setItem(login, JSON.stringify(data));

        dispatch(addToFavorites({ type, id: itemId }));
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

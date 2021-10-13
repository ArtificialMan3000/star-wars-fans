import {
    loading,
    idle,
    addToHistory,
    removeFromHistory,
} from '../authorization/authSlice';

export function setHistoryStateThunk({ films, people, planets }) {
    return function (dispatch) {
        dispatch(addToHistory({ type: 'films', query: films }));
        dispatch(addToHistory({ type: 'people', query: people }));
        dispatch(addToHistory({ type: 'planets', query: planets }));
    };
}

export function addToHistoryThunk(login, type, query) {
    return function (dispatch) {
        dispatch(loading());

        console.log(query);

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        data.history[type].push(query);
        localStorage.setItem(login, JSON.stringify(data));

        dispatch(addToHistory({ type, query }));
        dispatch(idle());
    };
}

export function removeFromHistoryThunk(login, type, index) {
    return function (dispatch) {
        dispatch(loading());

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        data.history[type].splice(index, 1);
        localStorage.setItem(login, JSON.stringify(data));

        dispatch(removeFromHistory({ type, index }));
        dispatch(idle());
    };
}

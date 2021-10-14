import {
    loading,
    idle,
    addToHistory,
    removeFromHistory,
} from '../authorization/authSlice';

export function setHistoryStateThunk({ films, people, planets }) {
    return function (dispatch) {
        dispatch(addToHistory({ type: 'films', queryObj: films }));
        dispatch(addToHistory({ type: 'people', queryObj: people }));
        dispatch(addToHistory({ type: 'planets', queryObj: planets }));
    };
}

export function addToHistoryThunk(login, type, obj) {
    return function (dispatch) {
        dispatch(loading());

        let data = localStorage.getItem(login);
        data = JSON.parse(data);

        data.history[type].push(obj);
        localStorage.setItem(login, JSON.stringify(data));

        obj = [obj];

        dispatch(addToHistory({ type, queryObj: obj }));
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

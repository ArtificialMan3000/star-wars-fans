import {
    loading,
    validationProgress,
    logInUser,
    logOutUser,
    clearFavoritesState,
    clearHistoryState,
} from './authSlice';
import { setFavoritesStateThunk } from '../favorites/favoritesThunks';
import { setHistoryStateThunk } from '../history/historyThunks';

/**
 * Валидация Регистрации пользователя:
 * @param {String} login Введённый пользователем логин.
 * @param {String} pass  Введённый пользователем пароль.
 * @param {String} confirmPass Подтверждение пароля.
 * @param {Function} setAuthLog Функция Callback (Сеттер) для сообщения компоненте статуса регистрации.
 */
export function validateSignUpThunk(login, pass, confirmPass, setAuthLog) {
    return function (dispatch) {
        dispatch(loading());

        if (!login.trim() || !pass || !confirmPass) {
            const message = 'Данные не заполнены';
            const code = 400;
            const status = 'idle';
            setAuthLog(message);
            return dispatch(validationProgress({ message, code, status }));
        }

        if (localStorage.getItem(login)) {
            const message = 'Логин занят';
            const code = 400;
            const status = 'idle';
            dispatch(validationProgress({ message, code, status }));
            return setAuthLog(message);
        }

        if (pass !== confirmPass) {
            const message = 'Пароли не совпадают';
            const code = 400;
            const status = 'idle';
            dispatch(validationProgress({ message, code, status }));
            return setAuthLog(message);
        }

        const user = {
            pass,
            favorites: {
                films: [],
                people: [],
                planets: [],
            },
            history: {
                films: [],
                people: [],
                planets: [],
            },
        };

        localStorage.setItem(login, JSON.stringify(user));
        localStorage.setItem('currentUser', login);

        const message = 'Пользователь создан';
        const code = 201;
        const status = 'idle';
        dispatch(logInUser({ login }));
        dispatch(validationProgress({ message, code, status }));
        setAuthLog(message);
    };
}

/**
 * Валидация Авторизации пользователя:
 * @param {String} login Введённый пользователем логин.
 * @param {String} pass  Введённый пользователем пароль.
 * @param {Function} setAuthLog Функция Callback (Сеттер) для сообщения компоненте статуса регистрации.
 */
export function validateSignInThunk(login, pass, setAuthLog) {
    return function (dispatch) {
        dispatch(loading());

        if (!login.trim() || !pass) {
            const message = 'Данные не заполнены';
            const code = 400;
            const status = 'idle';
            dispatch(validationProgress({ message, code, status }));
            return setAuthLog(message);
        }

        let storageData = localStorage.getItem(login);
        if (storageData) {
            storageData = JSON.parse(storageData);
        }

        if (!storageData || storageData.pass !== pass) {
            const message = 'Некорректные данные';
            const code = 400;
            const status = 'idle';
            dispatch(validationProgress({ message, code, status }));
            return setAuthLog(message);
        }

        localStorage.setItem('currentUser', login);

        dispatch(setFavoritesStateThunk(storageData.favorites));

        dispatch(setHistoryStateThunk(storageData.history));

        const message = 'Пользователь авторизован';
        const code = 200;
        const status = 'idle';
        dispatch(logInUser({ login }));
        dispatch(validationProgress({ message, code, status }));
        setAuthLog(message);
    };
}

/**
 * Функция (thunk) удаляет из localstorage пару 'currUser' - 'login'.
 *
 * Очищает Добавленные пользователем в Избранное элементы из State.
 *
 * Затем удаляет данные о пользователе из 'Store'.
 */
export function logOutUserThunk() {
    return function (dispatch) {
        dispatch(loading());
        localStorage.removeItem('currentUser');

        const message = 'Пользователь не авторизован';
        const code = 204;
        const status = 'idle';
        dispatch(logOutUser());

        dispatch(clearFavoritesState());

        dispatch(clearHistoryState());

        dispatch(validationProgress({ message, code, status }));
    };
}

/**
 * Функция проверяет localstorage на наличие ключа: 'currUser'.
 *
 * @return {Object} Если ключ currUser есть в localstorage,
 * возвращает состояние по умолчанию с Авторизованным пользователем в reducer Аутентификации.
 *
 * Также подтягивает из Local Storage все добавленные пользователем в Избранное карточки,
 * и Историю поиска.
 * @return {Object} Если ключа currUser нет в localstorage,
 * возвращает состояние по умолчанию без пользователя в reducer Аутентификации.
 */
export function isCurrUserLoged() {
    const login = localStorage.getItem('currentUser');

    if (login) {
        let userObj = localStorage.getItem(login);
        userObj = JSON.parse(userObj);
        return {
            user: {
                userIsLogged: true,
                userName: login,
            },
            progress: {
                status: 'idle',
                message: 'Пользователь авторизован',
                code: 200,
            },
            favorites: userObj.favorites,
            history: userObj.history,
        };
    } else {
        return {
            user: {
                userIsLogged: false,
                userName: '',
            },
            progress: {
                status: 'idle',
                message: 'Пользователь не авторизован',
                code: 204,
            },
            favorites: {
                films: [],
                people: [],
                planets: [],
            },
            history: {
                films: [],
                people: [],
                planets: [],
            },
        };
    }
}

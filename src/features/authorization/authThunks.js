import {
    loading,
    validationProgress,
    logInUser,
    logOutUser,
} from './authSlice';

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
            setAuthLog(message);
            return dispatch(validationProgress({ message, code, status }));
        }

        if (pass !== confirmPass) {
            const message = 'Пароли не совпадают';
            const code = 400;
            const status = 'idle';
            setAuthLog(message);
            return dispatch(validationProgress({ message, code, status }));
        }

        localStorage.setItem(login, pass);
        localStorage.setItem('currentUser', login);

        const message = 'Пользователь создан';
        const code = 201;
        const status = 'idle';
        setAuthLog(message);
        dispatch(logInUser({ login }));
        return dispatch(validationProgress({ message, code, status }));
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
            setAuthLog(message);
            return dispatch(validationProgress({ message, code, status }));
        }

        const storageData = localStorage.getItem(login);
        if (!storageData || storageData !== pass) {
            const message = 'Некорректные данные';
            const code = 400;
            const status = 'idle';
            setAuthLog(message);
            return dispatch(validationProgress({ message, code, status }));
        }

        localStorage.setItem('currentUser', login);

        const message = 'Пользователь авторизован';
        const code = 200;
        const status = 'idle';
        setAuthLog(message);
        dispatch(logInUser({ login }));
        return dispatch(validationProgress({ message, code, status }));
    };
}

/**
 * Функция (thunk) удаляет из localstorage пару 'currUser' - 'login'.
 *
 * Затем исключает данные пользователя из 'Store'.
 */
export function logOutUserThunk() {
    return function (dispatch) {
        dispatch(loading());
        localStorage.removeItem('currentUser');

        const message = 'Пользователь вышел';
        const code = 204;
        const status = 'idle';
        dispatch(logOutUser());
        dispatch(validationProgress({ message, code, status }));
    };
}

/**
 * Функция (thunk) проверяет localstorage на наличие ключа: 'currUser'.
 *
 * Если ключ currUser есть в localstorage, извлекает значение 'login'
 *
 * и Авторизует данного пользователя в 'Store'.
 */
export function checkCurrUserThunk() {
    return function (dispatch) {
        dispatch(loading());

        const login = localStorage.getItem('currentUser');
        if (login) {
            const message = 'Пользователь авторизован';
            const code = 200;
            const status = 'idle';
            dispatch(logInUser({ login }));
            dispatch(validationProgress({ message, code, status }));
        } else {
            const message = 'Пользователь не авторизован';
            const code = 204;
            const status = 'idle';
            dispatch(validationProgress({ message, code, status }));
        }
    };
}

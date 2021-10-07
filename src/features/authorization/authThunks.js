import { loading, validationProgress, logInUser } from './authSlice';

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
			dispatch(validationProgress({ message, code, status }));
			return setAuthLog(message);
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

		localStorage.setItem(login, pass);

		dispatch(logInUser({ login }));

		const message = 'Пользователь создан';
		const code = 201;
		const status = 'idle';
		dispatch(validationProgress({ message, code, status }));
		return setAuthLog(message);
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

		const storageData = localStorage.getItem(login);
		if (!storageData || storageData !== pass) {
			const message = 'Некорректные данные';
			const code = 400;
			const status = 'idle';
			dispatch(validationProgress({ message, code, status }));
			return setAuthLog(message);
		}

		dispatch(logInUser({ login }));

		const message = 'Пользователь авторизован';
		const code = 200;
		const status = 'idle';
		dispatch(validationProgress({ message, code, status }));
		return setAuthLog(message);
	};
}

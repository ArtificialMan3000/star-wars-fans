import React from 'react';
import { useState } from 'react';
import { useFormInput } from '../auxiliary/customHooks';
import { useDispatch } from 'react-redux';
import { signUp } from './authSlice';
import { auth, form, control, actions } from './Auth.module.css';

export default function Signup() {
	const [login, onLoginChange, loginReset] = useFormInput('');
	const [pass, onPassChange, passReset] = useFormInput('');
	const [confirmPass, onConfirmPassChange, confirmPassReset] = useFormInput('');
	const [authLog, setAuthLog] = useState('');
	const [isPending, setIsPending] = useState(false);
	const dispatch = useDispatch();

	const submitHandler = event => {
		event.preventDefault();
		setIsPending(true);

		const message = validateInput(login, pass, confirmPass, dispatch);

		setAuthLog(message);

		loginReset();
		passReset();
		confirmPassReset();

		setIsPending(false);
	};

	return (
		<div className='body'>
			<div className={auth}>
				{authLog && <p>{authLog}</p>}
				<h2>Регистрация:</h2>
				<form className={form} onSubmit={submitHandler}>
					<div className={control}>
						<label htmlFor='login'>Логин:</label>
						<input
							type='text'
							required
							value={login}
							onChange={onLoginChange}
							id='login'
						/>
					</div>
					<div className={control}>
						<label htmlFor='password'>Пароль:</label>
						<input
							type='password'
							required
							value={pass}
							onChange={onPassChange}
							id='password'
						/>
					</div>
					<div className={control}>
						<label htmlFor='confirmPassword'>Подтвердите пароль:</label>
						<input
							type='password'
							required
							value={confirmPass}
							onChange={onConfirmPassChange}
							id='confirmPassword'
						/>
					</div>
					<div className={actions}>
						<button disabled={isPending}>Готово</button>
					</div>
				</form>
			</div>
		</div>
	);
}

function validateInput(login, pass, confirmPass, dispatch) {
	if (!login.trim() || !pass || !confirmPass) {
		return 'Данные не заполнены!';
	}

	if (localStorage.getItem(login)) {
		return 'Логин занят!';
	}

	if (pass !== confirmPass) {
		return 'Пароли не совпадают!';
	}

	dispatch(
		signUp({
			login,
			pass,
		})
	);

	return 'Успешно!';
}

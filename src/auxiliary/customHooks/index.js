import { useState } from 'react';

/**
 *
 * @param {String} initialValue
 *
 * Возвращает три значения:
 * @return {String} Значение.
 * @return {Function} Функцию меняющую значение.
 * @return {Function} Функцию сбрасывающую значение на пустую строку.
 */
export function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	const handleChange = event => {
		setValue(event.target.value);
	};

	const resetValue = () => {
		setValue('');
	};

	return [value, handleChange, resetValue];
}

/**
 *
 * @param {Boolean} initialValue Значение которое будет меняться на противоположное
 * при помощи оператора отрицания (!).
 *
 * Возвращает пару:
 * @return {String}  Значение.
 * @return {Function} Функцию меняющую значение на противоположное.
 *
 */
export function useToggle(initialValue) {
	const [value, setValue] = useState(initialValue);

	const toggle = () => {
		setValue(!value);
	};

	return [value, toggle];
}

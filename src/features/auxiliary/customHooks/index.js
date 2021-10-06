import { useState, useEffect } from 'react';

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

/**
 *
 * @param {any} initialValue переданный аргумент будет преобразован в JSON формат и сохранён в localstorage.
 * @param {String} key Ключ под именем которого будет сохранено значение первого аргумента.
 *
 * Возвращает пару:
 * @return {String} Сохранённая строка.
 * @return {Function} Функция добавляющая значение в localstorage.
 *
 */
export function useLocalStorage(initialValue, key) {
	function getValue() {
		const storage = localStorage.getItem(key); // STRING || NULL

		if (storage) {
			return JSON.parse(storage); // from JSON format to STRING
		}

		return initialValue;
	}

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}

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

    const handleChange = (event) => {
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

// Hook
export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}

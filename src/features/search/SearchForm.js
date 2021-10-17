import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DEBOUNCE_DELAY } from './searchConfig';
import { useDebounce } from '../../auxiliary/customHooks/useDebounce';
import { setSearchQuery } from './searchSlice';

const SearchForm = (props) => {
    const [value, setValue] = useState(props.initialValue);
    const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);
    const dispatch = useDispatch();

    const changeHandler = (evt) => {
        setValue(evt.target.value);
    };

    useEffect(() => {
        dispatch(setSearchQuery(debouncedValue));
    }, [debouncedValue, dispatch]);

    return (
        <>
            <form onSubmit={(evt) => props.submitHandler(evt, value)}>
                <input
                    className="search-input"
                    onChange={(evt) => changeHandler(evt)}
                    type="text"
                    name="search"
                    value={value}
                />
                <button className="search-button" type="submit">
                    Поиск
                </button>
            </form>
        </>
    );
};

export { SearchForm };

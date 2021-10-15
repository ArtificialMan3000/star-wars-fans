import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { DEBOUNCE_DELAY } from './searchConfig';
import { useDebounce } from '../../auxiliary/customHooks/useDebounce';
import { setSearchValue } from './searchSlice';

const SearchForm = (props) => {
    const [value, setValue] = useState(props.initialValue);
    const debouncedValue = useDebounce(value, DEBOUNCE_DELAY);
    const [isRedirect, setIsRedirect] = useState(false);
    const dispatch = useDispatch();

    const changeHandler = (evt) => {
        setValue(evt.target.value);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        setIsRedirect(true);
    };

    useEffect(() => {
        dispatch(setSearchValue(debouncedValue));
    }, [debouncedValue, dispatch]);

    return (
        <>
            {isRedirect && (
                <Redirect
                    push
                    to={{ pathname: '/search', search: `?search=${value}` }}
                />
            )}
            <form onSubmit={(evt) => submitHandler(evt)} action="/search">
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

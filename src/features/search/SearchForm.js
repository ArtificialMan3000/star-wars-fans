import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './searchFetchThunk';
import { SearchSuggestions } from './SearchSuggestions';
import { useDebounce } from '../../auxiliary/customHooks/useDebounce';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const changeHandler = (evt) => {
        setValue(evt.target.value);
    };

    const results = useSelector((state) => {
        return state.search.list;
    });

    const dispatch = useDispatch();

    const debouncedValue = useDebounce(value, 1000);

    useEffect(() => {
        const promise = dispatch(fetchSuggestions(debouncedValue));
        return () => {
            if (promise) {
                promise.abort();
            }
        };
    }, [debouncedValue, dispatch]);

    const submitHandler = (evt) => {
        evt.preventDefault();
        dispatch(fetchSuggestions(value));
    };
    return (
        <form onSubmit={(evt) => submitHandler(evt)}>
            <input
                onChange={(evt) => changeHandler(evt)}
                type="text"
                name="search"
                value={value}
            />
            {results && <SearchSuggestions suggestions={results} />}
            <button>Поиск</button>
        </form>
    );
};

export { SearchForm };

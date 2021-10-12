import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './searchFetchThunk';
import { SearchSuggestions } from './SearchSuggestions';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const changeHandler = (evt) => {
        setValue(evt.target.value);
    };
    const searchResults = useSelector((state) => {
        // console.log(state);
        return state.search.list;
    });
    // console.log(searchResults);
    const dispatch = useDispatch();
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
            {searchResults && <SearchSuggestions suggestions={searchResults} />}
            <button>Поиск</button>
        </form>
    );
};

export { SearchForm };

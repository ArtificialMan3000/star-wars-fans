import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './searchFetchThunk';

const Search = () => {
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
    const clickHandler = () => {
        dispatch(fetchSuggestions(value));
    };
    return (
        <>
            <input
                onChange={(evt) => changeHandler(evt)}
                type="text"
                name="search"
                value={value}
            />
            <button onClick={clickHandler}>Поиск</button>
        </>
    );
};

export { Search };

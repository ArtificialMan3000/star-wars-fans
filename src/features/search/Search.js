import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from '../../auxiliary/customHooks/useSearchParams';
import { fetchSearchResults } from './searchFetchThunk';
import {
    resetSearchStatus,
    searchSelector,
    searchValueSelector,
} from './searchSlice';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

const Search = () => {
    const [initialValue] = useSearchParams(['search']);
    const [results, fetchStatus] = useSelector(searchSelector);
    const searchValue = useSelector(searchValueSelector);

    const dispatch = useDispatch();

    // Сбрасываем статус запроса при изменении поисковой строки
    useEffect(() => {
        dispatch(resetSearchStatus());
    }, [searchValue, dispatch]);

    // Запрашиваем новые результаты поиска
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchSearchResults(searchValue));
        }
    }, [fetchStatus, searchValue, dispatch]);

    return (
        <div className={`body`}>
            <SearchForm initialValue={initialValue || ''} />
            {results && <SearchResults results={results} />}
        </div>
    );
};

export { Search };

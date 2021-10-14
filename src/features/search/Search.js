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
import { addToHistoryThunk } from '../history/historyThunks';

const Search = () => {
    const [initialValue] = useSearchParams(['search']);
    const [results, fetchStatus] = useSelector(searchSelector);
    const searchValue = useSelector(searchValueSelector);
    const login = useSelector((state) => state.auth.user.userName);

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

    /**
     * При клике на ссылку результата добавляет запись в историю
     * @param {String} type Тип записи (фильмы, персонажи или планеты)
     * @param {Object} query Запись в формате {id: 1, title: 'Skywalker'}
     */
    const resultLinkClickHandler = (type, query) => {
        dispatch(addToHistoryThunk(login, type, query));
    };

    return (
        <div className="search-container">
            <div className="main-head">
                <h2>Главная Страница:</h2>
            </div>
            <div className="search-header">
                <SearchForm initialValue={initialValue || ''} />
            </div>
            <div className="search-body">
                {results && (
                    <SearchResults
                        results={results}
                        resultLinkClickHandler={resultLinkClickHandler}
                    />
                )}
            </div>
        </div>
    );
};

export { Search };

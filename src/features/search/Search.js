import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useSearchParams } from '../../auxiliary/customHooks/useSearchParams';
import { fetchSearchResults } from './searchFetchThunk';
import { selectSearchQuery, selectSearchStatus } from './searchSelectors';
import { LoadingMessage } from './messages/LoadingMessage';
import { ErrorMessage } from './messages/ErrorMessage';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { addToHistoryThunk } from '../history/historyThunks';

const Search = () => {
    const [initialQuery] = useSearchParams(['search']);
    const [fetchStatus, fetchError] = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectSearchQuery);
    const redirectInitial = {
        isRedirect: false,
        query: '',
    };
    const [{ isRedirect, query: redirectQuery }, setRedirect] =
        useState(redirectInitial);

    const login = useSelector((state) => state.auth.user.userName);
    const history = useSelector((state) => state.auth.history);

    const dispatch = useDispatch();

    // Запрашиваем новые результаты поиска
    useEffect(() => {
        dispatch(fetchSearchResults(searchQuery));
    }, [initialQuery, searchQuery, dispatch]);

    // При отправке формы активируем редирект на страницу поиска
    const submitFormHandler = (evt, value) => {
        evt.preventDefault();
        setRedirect({ isRedirect: true, query: value });
    };

    /**
     * При клике на ссылку результата добавляет запись в историю
     * @param {String} type Тип записи (фильмы, персонажи или планеты)
     * @param {Object} query Запись в формате {id: 1, title: 'Skywalker'}
     */
    const resultLinkClickHandler = useCallback(
        (type, query) => {
            if (login === '') {
                return;
            }
            const isInHistory = history[type].find(
                (el) => el.id === `${query.id}`
            );

            if (isInHistory) {
                return;
            }
            dispatch(addToHistoryThunk(login, type, query));
        },
        [history, login, dispatch]
    );

    return (
        <>
            {useMemo(
                () => (
                    <>
                        {isRedirect && (
                            <>
                                <Redirect
                                    push
                                    to={{
                                        pathname: '/search',
                                        search: `?search=${redirectQuery}`,
                                    }}
                                />
                            </>
                        )}
                    </>
                ),
                [isRedirect, redirectQuery]
            )}
            <div className="search-container">
                {useMemo(
                    () => (
                        <>
                            <div className="search-header">
                                <SearchForm
                                    initialValue={initialQuery || ''}
                                    submitHandler={submitFormHandler}
                                />
                            </div>
                        </>
                    ),
                    [initialQuery]
                )}
                {useMemo(
                    () => (
                        <div className="search-body">
                            {fetchStatus === 'loading' && <LoadingMessage />}
                            {fetchError && <ErrorMessage error={fetchError} />}
                            <SearchResults
                                resultLinkClickHandler={resultLinkClickHandler}
                            />
                        </div>
                    ),
                    [fetchStatus, fetchError, resultLinkClickHandler]
                )}
            </div>
        </>
    );
};

export { Search };

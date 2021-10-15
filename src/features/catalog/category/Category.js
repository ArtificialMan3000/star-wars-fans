import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CATALOG_STRINGS } from '../catalogStrings';
import { selectCatalogStatus } from '../catalogSelectors';
import { fetchCatalogCategory } from '../catalogFetchThunks';
import { LoadingMessage } from '../messages/LoadingMessage';
import { ErrorMessage } from '../messages/ErrorMessage';
import { CategoryList } from './CategoryList';

const Category = () => {
    // Получаем тип элемента из адресной строки
    const { type } = useParams();

    // Данные о статусе запроса
    const [fetchStatus, fetchError] = useSelector(selectCatalogStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalogCategory(type));
    }, [type, dispatch]);

    return (
        <>
            <div className="body">
                <h1>{CATALOG_STRINGS[type]?.categoryHeader}</h1>
                {fetchStatus === 'loading' && <LoadingMessage />}
                {fetchError && <ErrorMessage error={fetchError} />}
                <CategoryList type={type} />
            </div>
        </>
    );
};

export { Category };

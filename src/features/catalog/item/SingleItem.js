import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LoadingMessage } from '../messages/LoadingMessage';
import { ErrorMessage } from '../messages/ErrorMessage';
import { selectCatalogStatus } from '../catalogSelectors';
import { fetchCatalogItem } from '../catalogFetchThunks';
import { SingleItemCard } from './SingleItemCard';

// Карточка элемента каталога
function SingleItem() {
    // Получаем id и тип элемента из адресной строки
    const { type, id } = useParams();

    // Данные о статусе запроса
    const [fetchStatus, fetchError] = useSelector(selectCatalogStatus);
    console.log('status', fetchStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        // Посылаем запрос
        dispatch(fetchCatalogItem({ id, type }));
    }, [id, type, dispatch]);

    return (
        <div className="body">
            {fetchStatus === 'loading' && <LoadingMessage />}
            {fetchError && <ErrorMessage error={fetchError} />}
            <SingleItemCard id={id} type={type} />
        </div>
    );
}

export { SingleItem };

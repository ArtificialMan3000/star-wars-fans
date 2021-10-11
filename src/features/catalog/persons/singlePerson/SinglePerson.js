import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
    fetchSinglePerson,
    singlePersonUnmounted,
    selectSinglePersonData,
} from './singlePersonSlice';
import { LoadingMessage } from '../../messages/LoadingMessage';
import { ErrorMessage } from '../../messages/ErrorMessage';

// Карточка элемента
export default function SinglePerson() {
    // Забираем данные о фильме из стора
    const [person, fetchStatus, fetchError] = useSelector(
        selectSinglePersonData
    );

    // Получаем id фильма из адресной строки
    const { id: personId } = useParams();

    const dispatch = useDispatch();
    // Запрашиваем фильм
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchSinglePerson(personId));
        }
    }, [fetchStatus, personId, dispatch]);

    // Сбрасываем состояние запроса при размонтировании компонента
    useEffect(() => {
        return () => {
            dispatch(singlePersonUnmounted());
        };
    }, [dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            renderedComponent = (
                <div className="single-person">
                    <h1>{person.name}</h1>
                    <dl className="person-specifications">
                        <dt className="specification-name">Birth year</dt>
                        <dd className="specification-value">
                            {person.birth_year}
                        </dd>
                        <dt className="specification-name">Height</dt>
                        <dd className="specification-value">{person.height}</dd>
                        <dt className="specification-name">Eye color</dt>
                        <dd className="specification-value">
                            {person.eye_color}
                        </dd>
                    </dl>
                </div>
            );
            break;
        case 'rejected':
            renderedComponent = <ErrorMessage error={fetchError} />;
            break;
        default:
            renderedComponent = <LoadingMessage />;
    }

    return <div className="body">{renderedComponent}</div>;
}

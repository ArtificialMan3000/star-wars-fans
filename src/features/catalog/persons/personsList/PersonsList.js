import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPersonsData, fetchPersons } from './personsSlice';
import { PersonListItem } from './PersonsListItem';
import { LoadingMessage } from '../../messages/LoadingMessage';
import { ErrorMessage } from '../../messages/ErrorMessage';

// Список фильмов
export default function PersonsList() {
    // Забираем данные о фильмах из стора
    const [persons, fetchStatus, fetchError] = useSelector(selectPersonsData);
    const dispatch = useDispatch();

    // Запрашиваем фильмы
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchPersons());
        }
    }, [fetchStatus, dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            // Генерируем выводы компонентов на основании списка фильмов
            const personListItems = persons.map((person, index) => {
                // В API номера сущностей совпадают с порядком в массиве
                const personId = index + 1;
                return (
                    <PersonListItem
                        key={personId}
                        personId={personId}
                        name={person.name}
                    />
                );
            });
            renderedComponent = (
                <div className="persons-grid">{personListItems}</div>
            );
            break;
        case 'rejected':
            renderedComponent = <ErrorMessage error={fetchError} />;
            break;
        default:
            renderedComponent = <LoadingMessage />;
    }

    return (
        <div className="body">
            <h1>Список персонажей</h1>
            {renderedComponent}
        </div>
    );
}

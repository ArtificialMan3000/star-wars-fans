import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilmsData, fetchFilms } from './filmsSlice';
import { FilmListItem } from './FilmListItem';
import { LoadingMessage } from '../../messages/LoadingMessage';
import { ErrorMessage } from '../../messages/ErrorMessage';

// Список фильмов
export function FilmsList() {
    // Забираем данные о фильмах из стора
    const [films, fetchStatus, fetchError] = useSelector(selectFilmsData);
    const dispatch = useDispatch();

    // Запрашиваем фильмы
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchFilms());
        }
    }, [fetchStatus, dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            // Генерируем выводы компонентов на основании списка фильмов
            const filmListItems = films.map((film, index) => {
                // В API номера сущностей совпадают с порядком в массиве
                const filmId = index + 1;
                return (
                    <FilmListItem
                        key={filmId}
                        filmId={filmId}
                        title={film.title}
                    />
                );
            });
            renderedComponent = (
                <div className="films-grid">{filmListItems}</div>
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
            <h1>Список фильмов</h1>
            {renderedComponent}
        </div>
    );
}

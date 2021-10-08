import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSingleFilm, selectSingleFilmData } from './singleFilmSlice';
import { LoadingMessage } from '../messages/LoadingMessage';
import { ErrorMessage } from '../messages/ErrorMessage';

// Карточка элемента
export function SingleFilm() {
    // Забираем данные о фильме из стора
    const [film, fetchStatus, fetchError] = useSelector(selectSingleFilmData);

    // Получаем id фильма из адресной строки
    const { id: filmId } = useParams();

    const dispatch = useDispatch();
    // Запрашиваем фильм
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchSingleFilm(filmId));
        }
    }, [fetchStatus, filmId, dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            renderedComponent = (
                <div className="single-film">
                    <h1>{film.title}</h1>
                    <p className="episode-num">Episode {film.episode_id}</p>
                    <div className="opening">{film.opening_crawl}</div>
                </div>
            );
            break;
        case 'rejected':
            renderedComponent = <ErrorMessage error={fetchError} />;
            break;
        default:
            renderedComponent = <LoadingMessage />;
    }

    return renderedComponent;
}

import React from 'react';
import { useSelector } from 'react-redux';
import {
    fetchSingleFilm,
    singleFilmUnmounted,
    selectSingleFilmData,
} from './singleFilmSlice';
import { SingleCatalogItem } from '../../SingleCatalogItem';

// Карточка элемента
const SingleFilm = () => {
    // Забираем данные о фильме из стора
    const filmData = useSelector(selectSingleFilmData);

    // Генерирует описание фильма
    const renderDescription = (film) => {
        return (
            <>
                <p className="episode-num">Episode {film.episode_id}</p>
                <div className="opening">{film.opening_crawl}</div>
            </>
        );
    };

    return (
        <div className="body">
            <SingleCatalogItem
                type={'films'}
                itemData={filmData}
                fetchSingleItem={fetchSingleFilm}
                singleItemUnmounted={singleFilmUnmounted}
                renderDescription={renderDescription}
            />
        </div>
    );
};

export { SingleFilm };

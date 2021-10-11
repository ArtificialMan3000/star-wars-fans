import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
    fetchSinglePlanet,
    singlePlanetUnmounted,
    selectSinglePlanetData,
} from './singlePlanetSlice';
import { LoadingMessage } from '../../messages/LoadingMessage';
import { ErrorMessage } from '../../messages/ErrorMessage';

// Карточка элемента
export default function SinglePlanet() {
    // Забираем данные о фильме из стора
    const [planet, fetchStatus, fetchError] = useSelector(
        selectSinglePlanetData
    );

    // Получаем id фильма из адресной строки
    const { id: planetId } = useParams();

    const dispatch = useDispatch();
    // Запрашиваем фильм
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchSinglePlanet(planetId));
        }
    }, [fetchStatus, planetId, dispatch]);

    // Сбрасываем состояние запроса при размонтировании компонента
    useEffect(() => {
        return () => {
            dispatch(singlePlanetUnmounted());
        };
    }, [dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            renderedComponent = (
                <div className="single-planet">
                    <h1>{planet.name}</h1>
                    <dl className="planet-specifications">
                        <dt className="specification-name">Climate</dt>
                        <dd className="specification-value">
                            {planet.climate}
                        </dd>
                        <dt className="specification-name">Diameter</dt>
                        <dd className="specification-value">
                            {planet.diameter}
                        </dd>
                        <dt className="specification-name">Terrain</dt>
                        <dd className="specification-value">
                            {planet.terrain}
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

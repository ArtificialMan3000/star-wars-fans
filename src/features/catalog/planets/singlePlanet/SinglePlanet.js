import React from 'react';
import { useSelector } from 'react-redux';
import {
    fetchSinglePlanet,
    singlePlanetUnmounted,
    selectSinglePlanetData,
} from './singlePlanetSlice';
import { SingleCatalogItem } from '../../SingleCatalogItem';

// Карточка элемента
const SinglePlanet = () => {
    // Забираем данные о планете из стора
    const planetData = useSelector(selectSinglePlanetData);

    // Генерирует описание планеты
    const renderDescription = (planet) => {
        return (
            <dl className="planet-specifications">
                <dt className="specification-name">Climate:</dt>
                <dd className="specification-value">{planet.climate}</dd>
                <br />
                <dt className="specification-name">Diameter:</dt>
                <dd className="specification-value">{planet.diameter}</dd>
                <br />
                <dt className="specification-name">Terrain:</dt>
                <dd className="specification-value">{planet.terrain}</dd>
            </dl>
        );
    };

    return (
        <div className="body">
            <SingleCatalogItem
                type={'planets'}
                itemData={planetData}
                fetchSingleItem={fetchSinglePlanet}
                singleItemUnmounted={singlePlanetUnmounted}
                renderDescription={renderDescription}
            />
        </div>
    );
};

export { SinglePlanet };

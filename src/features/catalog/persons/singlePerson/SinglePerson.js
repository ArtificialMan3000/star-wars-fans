import React from 'react';
import { useSelector } from 'react-redux';
import {
    fetchSinglePerson,
    singlePersonUnmounted,
    selectSinglePersonData,
} from './singlePersonSlice';
import { SingleCatalogItem } from '../../SingleCatalogItem';

// Карточка элемента
const SinglePerson = () => {
    // Забираем данные о персонаже из стора
    const personData = useSelector(selectSinglePersonData);

    // Генерирует описание персонажа
    const renderDescription = (person) => {
        return (
            <dl className="person-specifications">
                <dt className="specification-name">Birth year</dt>
                <dd className="specification-value">{person.birth_year}</dd>
                <dt className="specification-name">Height</dt>
                <dd className="specification-value">{person.height}</dd>
                <dt className="specification-name">Eye color</dt>
                <dd className="specification-value">{person.eye_color}</dd>
            </dl>
        );
    };

    return (
        <div className="body">
            <SingleCatalogItem
                type={'person'}
                itemData={personData}
                fetchSingleItem={fetchSinglePerson}
                singleItemUnmounted={singlePersonUnmounted}
                renderDescription={renderDescription}
            />
        </div>
    );
};

export { SinglePerson };

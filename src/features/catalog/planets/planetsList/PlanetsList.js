import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlanetsData, fetchPlanets } from './planetsSlice';
import { PlanetListItem } from './PlanetsListItem';
import { LoadingMessage } from '../../messages/LoadingMessage';
import { ErrorMessage } from '../../messages/ErrorMessage';

// Список фильмов
export function PlanetsList() {
    // Забираем данные о фильмах из стора
    const [planets, fetchStatus, fetchError] = useSelector(selectPlanetsData);
    const dispatch = useDispatch();

    // Запрашиваем фильмы
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchPlanets());
        }
    }, [fetchStatus, dispatch]);

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            // Генерируем выводы компонентов на основании списка фильмов
            const planetListItems = planets.map((planet, index) => {
                // В API номера сущностей совпадают с порядком в массиве
                const planetId = index + 1;
                return (
                    <PlanetListItem
                        key={planetId}
                        planetId={planetId}
                        name={planet.name}
                    />
                );
            });
            renderedComponent = (
                <div className="planets-grid">{planetListItems}</div>
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
            <h1>Список планет</h1>
            {renderedComponent}
        </div>
    );
}

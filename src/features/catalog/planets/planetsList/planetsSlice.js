import { API_URL, API_PLANETS } from '../../../../apiConfig';
import { createFetchCatalogListThunk } from '../../catalogFetchThunks';
import { createCatalogListSlice } from '../../catalogListSlice';
import { createCatalogListDataSelector } from '../../catalogSelectors';

// Слайс для списка фильмов
const sliceName = 'planets';

// Thunk для запроса списка фильмов
const fetchPlanets = createFetchCatalogListThunk(
    'planets/fetchPlanets',
    `${API_URL}${API_PLANETS}`
);

// Создаём слайс для фильмов
const planetsSlice = createCatalogListSlice(sliceName, fetchPlanets);

// Селектор
export const selectPlanetsData = createCatalogListDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const planetsReducer = planetsSlice.reducer;
export { fetchPlanets };

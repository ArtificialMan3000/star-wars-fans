import { API_URL, API_PLANETS } from '../../../../apiConfig';
import { createFetchCatalogItemThunk } from '../../catalogFetchThunks';
import { createCatalogSingleSlice } from '../../catalogSingleSlice';
import { createCatalogSingleDataSelector } from '../../catalogSelectors';

// Слайс для единичного фильма
const sliceName = 'singlePlanet';

const fetchSinglePlanet = createFetchCatalogItemThunk(
    'planets/fetchSinglePlanet',
    `${API_URL}${API_PLANETS}`
);

// Создаём слайс для фильмов
const singlePlanetSlice = createCatalogSingleSlice(
    sliceName,
    fetchSinglePlanet
);

// Селектор
export const selectSinglePlanetData =
    createCatalogSingleDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const singlePlanetReducer = singlePlanetSlice.reducer;
export const { singlePlanetUnmounted } = singlePlanetSlice.actions;
export { fetchSinglePlanet };

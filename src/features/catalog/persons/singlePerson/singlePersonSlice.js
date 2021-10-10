import { API_URL, API_PEOPLE } from '../../../../apiConfig';
import { createFetchCatalogItemThunk } from '../../catalogFetchThunks';
import { createCatalogSingleSlice } from '../../catalogSingleSlice';
import { createCatalogSingleDataSelector } from '../../catalogSelectors';

// Слайс для единичного фильма
const sliceName = 'singlePerson';

const fetchSinglePerson = createFetchCatalogItemThunk(
    'persons/fetchSinglePerson',
    `${API_URL}${API_PEOPLE}`
);

// Создаём слайс для фильмов
const singlePersonSlice = createCatalogSingleSlice(
    sliceName,
    fetchSinglePerson
);

// Селектор
export const selectSinglePersonData =
    createCatalogSingleDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const singlePersonReducer = singlePersonSlice.reducer;
export const { singlePersonUnmounted } = singlePersonSlice.actions;
export { fetchSinglePerson };

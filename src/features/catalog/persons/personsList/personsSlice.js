import { API_URL, API_PEOPLE } from '../../../../apiConfig';
import { createFetchCatalogListThunk } from '../../catalogFetchThunks';
import { createCatalogListSlice } from '../../catalogListSlice';
import { createCatalogListDataSelector } from '../../catalogSelectors';

// Слайс для списка фильмов
const sliceName = 'persons';

// Thunk для запроса списка фильмов
const fetchPersons = createFetchCatalogListThunk(
    'persons/fetchPersons',
    `${API_URL}${API_PEOPLE}`
);

// Создаём слайс для фильмов
const personsSlice = createCatalogListSlice(sliceName, fetchPersons);

// Селектор
export const selectPersonsData = createCatalogListDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const personsReducer = personsSlice.reducer;
export { fetchPersons };

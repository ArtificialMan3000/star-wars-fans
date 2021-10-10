import { API_URL, API_FILMS } from '../../../../apiConfig';
import { createFetchCatalogListThunk } from '../../catalogFetchThunks';
import { createCatalogListSlice } from '../../catalogListSlice';
import { createCatalogListDataSelector } from '../../catalogSelectors';

// Слайс для списка фильмов
const sliceName = 'films';

// Thunk для запроса списка фильмов
const fetchFilms = createFetchCatalogListThunk(
    'films/fetchFilms',
    `${API_URL}${API_FILMS}`
);

// Создаём слайс для фильмов
const filmsSlice = createCatalogListSlice(sliceName, fetchFilms);

// Селектор
export const selectFilmsData = createCatalogListDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const filmsReducer = filmsSlice.reducer;
export { fetchFilms };

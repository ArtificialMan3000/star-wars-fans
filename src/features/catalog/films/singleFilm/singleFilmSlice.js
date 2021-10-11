import { API_URL, API_FILMS } from '../../../../apiConfig';
import { createFetchCatalogItemThunk } from '../../catalogFetchThunks';
import { createCatalogSingleSlice } from '../../catalogSingleSlice';
import { createCatalogSingleDataSelector } from '../../catalogSelectors';

// Слайс для единичного фильма
const sliceName = 'singleFilm';

const fetchSingleFilm = createFetchCatalogItemThunk(
    'films/fetchSingleFilm',
    `${API_URL}${API_FILMS}`
);

// Создаём слайс для фильмов
const singleFilmSlice = createCatalogSingleSlice(sliceName, fetchSingleFilm);

// Селектор
export const selectSingleFilmData = createCatalogSingleDataSelector(sliceName);

// Получаем и экспортируем reducer и action creator
export const singleFilmReducer = singleFilmSlice.reducer;
export const { singleFilmUnmounted } = singleFilmSlice.actions;
export { fetchSingleFilm };

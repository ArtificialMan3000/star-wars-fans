import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_FILMS } from '../../../apiConfig';

// Слайс для единичного фильма

// Начальный state фильма
const initialState = {
    film: {},
    status: 'idle',
    error: null,
};

const fetchSingleFilm = createAsyncThunk(
    'films/fetchSingleFilm',
    async (filmId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}${API_FILMS}${filmId}`);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const filmData = await response.json();
            return filmData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Создаём слайс для фильмов
const singleFilmSlice = createSlice({
    name: 'singleFilm',
    initialState,
    reducers: {
        singleFilmUnmounted: (state) => {
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleFilm.pending, (state) => {
                state.status = 'pending';
                state.error = 'null';
            })
            .addCase(fetchSingleFilm.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.film = action.payload;
            })
            .addCase(fetchSingleFilm.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    },
});

// Селектор
export const selectSingleFilmData = (state) => [
    state.singleFilm.film,
    state.singleFilm.status,
    state.singleFilm.error,
];

// Получаем и экспортируем reducer и action creator
export const singleFilmReducer = singleFilmSlice.reducer;
export const { singleFilmUnmounted } = singleFilmSlice.actions;
export { fetchSingleFilm };

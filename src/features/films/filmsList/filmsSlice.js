import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_FILMS } from '../../../apiConfig';

// Слайс для фильмов

// Начальный state фильмов
const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

// Thunk для запроса списка фильмов
const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}${API_FILMS}`);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const filmsData = await response.json();
            return filmsData.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Создаём слайс для фильмов
const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = 'pending';
                state.error = 'null';
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.list = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    },
});

// Селектор
export const selectFilmsData = (state) => [
    state.films.list,
    state.films.status,
    state.films.error,
];

// Получаем и экспортируем reducer и action creator
export const filmsReducer = filmsSlice.reducer;
export { fetchFilms };

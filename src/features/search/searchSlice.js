import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchResults } from './searchFetchThunk';

const initialState = {
    value: '',
    results: [],
    status: 'idle',
    error: null,
    history: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload;
        },
        resetSearchStatus: (state) => {
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = 'pending';
                state.error = 'null';
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.results = action.payload || [];
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    },
});

// Получает данные о результатах поиска
const searchSelector = (state) => [
    state.search.results,
    state.search.status,
    state.search.error,
];

const searchValueSelector = (state) => state.search.value;

export const searchReducer = searchSlice.reducer;
export const { setSearchValue, resetSearchStatus } = searchSlice.actions;
export { searchSelector, searchValueSelector };

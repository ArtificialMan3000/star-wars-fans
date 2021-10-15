import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalogCategory, fetchCatalogItem } from './catalogFetchThunks';
import {
    setPending,
    setError,
    addItemToCache,
    addListItemsToCache,
    resetStatus,
} from './helpers';

const initialState = {
    cache: { items: {}, listItems: {} },
    status: 'idle',
    error: null,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogCategory.pending, (state) => {
                setPending(state);
            })
            .addCase(
                fetchCatalogCategory.fulfilled,
                (state, { payload: { type, result } }) => {
                    resetStatus(state);
                    addListItemsToCache(state, type, result);
                }
            )
            .addCase(
                fetchCatalogCategory.rejected,
                (state, { payload: error }) => {
                    setError(state, error);
                }
            )
            .addCase(fetchCatalogItem.pending, (state) => {
                setPending(state);
            })
            .addCase(
                fetchCatalogItem.fulfilled,
                (state, { payload: { type, result } }) => {
                    resetStatus(state);
                    addItemToCache(state, type, result);
                }
            )
            .addCase(
                fetchCatalogItem.rejected,
                (state, { error: { message }, payload: error }) => {
                    setError(state, `${message}: ${error}`);
                }
            );
    },
});

// Получаем и экспортируем reducer и action creator
const catalogReducer = catalogSlice.reducer;

export { catalogReducer };

import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchResults } from './searchFetchThunk';
import { setPending, setError, resetStatus } from './helpers';

const initialState = {
    query: '',
    results: [],
    status: 'idle',
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                setPending(state);
            })
            .addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
                resetStatus(state);
                state.results = payload || [];
            })
            .addCase(
                fetchSearchResults.rejected,
                (state, { payload: error }) => {
                    setError(state, error);
                }
            );
    },
});

export const searchReducer = searchSlice.reducer;
export const { setSearchQuery } = searchSlice.actions;

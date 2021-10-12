import { createSlice } from '@reduxjs/toolkit';
import { fetchSuggestions } from './searchFetchThunk';

const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuggestions.pending, (state) => {
                state.status = 'pending';
                state.error = 'null';
            })
            .addCase(fetchSuggestions.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.list = action.payload;
            })
            .addCase(fetchSuggestions.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const searchReducer = searchSlice.reducer;

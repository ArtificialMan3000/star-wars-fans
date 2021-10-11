import { createSlice } from '@reduxjs/toolkit';

// Начальный state
const initialState = {
    list: [],
    status: 'idle',
    error: null,
};

// Создаёт слайс для списка элементов каталога
const createCatalogListSlice = (name, thunk) => {
    return createSlice({
        name,
        initialState: { ...initialState },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(thunk.pending, (state) => {
                    state.status = 'pending';
                    state.error = 'null';
                })
                .addCase(thunk.fulfilled, (state, action) => {
                    state.status = 'fulfilled';
                    state.list = action.payload;
                })
                .addCase(thunk.rejected, (state, action) => {
                    state.status = 'rejected';
                    state.error = action.payload;
                });
        },
    });
};

export { createCatalogListSlice };

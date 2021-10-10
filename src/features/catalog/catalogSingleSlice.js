import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item: {},
    status: 'idle',
    error: null,
};

// Создаёт слайс для одного элемента каталога
const createCatalogSingleSlice = (name, thunk) => {
    return createSlice({
        name,
        initialState: { ...initialState },
        reducers: {
            [`${name}Unmounted`]: (state) => {
                state.status = 'idle';
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(thunk.pending, (state) => {
                    state.status = 'pending';
                    state.error = 'null';
                })
                .addCase(thunk.fulfilled, (state, action) => {
                    state.status = 'fulfilled';
                    state.item = action.payload;
                })
                .addCase(thunk.rejected, (state, action) => {
                    state.status = 'rejected';
                    state.error = action.payload;
                });
        },
    });
};

export { createCatalogSingleSlice };

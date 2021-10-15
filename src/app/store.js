import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/authorization/authSlice';
import { catalogReducer } from '../features/catalog/catalogSlice';
import { searchReducer } from '../features/search/searchSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        catalog: catalogReducer,
        search: searchReducer,
    },
});

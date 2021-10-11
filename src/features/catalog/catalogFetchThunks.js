import { createAsyncThunk } from '@reduxjs/toolkit';
// import { API_URL } from '../../../apiConfig';

// Thunk для запроса списка элементов каталога
const createFetchCatalogListThunk = (type, apiUrl) => {
    const payloadCreator = async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    };
    return createAsyncThunk(type, payloadCreator);
};

// Thunk для запроса одноо элемента каталога
const createFetchCatalogItemThunk = (type, apiUrl) => {
    const payloadCreator = async (filmId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${apiUrl}${filmId}`);
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    };
    return createAsyncThunk(type, payloadCreator);
};

export { createFetchCatalogListThunk, createFetchCatalogItemThunk };

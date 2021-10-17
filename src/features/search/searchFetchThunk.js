import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URLS } from '../../auxiliary/API/apiConfig';
import { doFetchFullResults } from '../../auxiliary/API/apiHelpers';
import { TYPES_FOR_SEARCH } from './searchConfig';

const payloadCreator = async (searchStr, { rejectedWithValue }) => {
    if (!searchStr) {
        return null;
    }
    let searchResults = [];
    for (const type of TYPES_FOR_SEARCH) {
        let results;
        try {
            results = await doFetchFullResults(
                `${API_URLS.base}${API_URLS[type]}?search=${searchStr}`
            );
        } catch (error) {
            rejectedWithValue(error);
        }
        if (results.length > 0) {
            searchResults = [...searchResults, { type, results }];
        }
    }
    return searchResults;
};

const fetchSearchResults = createAsyncThunk(
    'search/fetchResults',
    payloadCreator
);

export { fetchSearchResults };

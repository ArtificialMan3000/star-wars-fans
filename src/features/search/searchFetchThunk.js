import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_FILMS, API_PEOPLE, API_PLANETS } from '../../apiConfig';
import { doFetchFullResults } from '../../auxiliary/apiHelpers';

const urlsForSearch = [
    `${API_URL}${API_FILMS}`,
    `${API_URL}${API_PEOPLE}`,
    `${API_URL}${API_PLANETS}`,
];

const payloadCreator = async (searchStr, { rejectedWithValue }) => {
    if (!searchStr) {
        return null;
    }
    let searchResults = [];
    for (const url of urlsForSearch) {
        let results;
        try {
            results = await doFetchFullResults(`${url}?search=${searchStr}`);
        } catch (error) {
            rejectedWithValue(error);
        }
        searchResults = [...searchResults, ...results];
    }
    return searchResults;
};

const fetchSearchResults = createAsyncThunk(
    'search/fetchResults',
    payloadCreator
);

export { fetchSearchResults };

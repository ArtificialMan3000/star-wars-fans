import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_FILMS, API_PEOPLE, API_PLANETS } from '../../apiConfig';
import { doFetchFullResults } from '../../auxiliary/apiHelpers';

const entriesForSearch = [
    { type: 'films', url: `${API_URL}${API_FILMS}` },
    { type: 'people', url: `${API_URL}${API_PEOPLE}` },
    { type: 'planets', url: `${API_URL}${API_PLANETS}` },
];

const payloadCreator = async (searchStr, { rejectedWithValue }) => {
    if (!searchStr) {
        return null;
    }
    let searchResults = [];
    for (const entry of entriesForSearch) {
        let results;
        try {
            results = await doFetchFullResults(
                `${entry.url}?search=${searchStr}`
            );
        } catch (error) {
            rejectedWithValue(error);
        }
        if (results.length > 0) {
            searchResults = [
                ...searchResults,
                { type: entry.type, results: results },
            ];
        }
    }
    return searchResults;
};

const fetchSearchResults = createAsyncThunk(
    'search/fetchResults',
    payloadCreator
);

export { fetchSearchResults };

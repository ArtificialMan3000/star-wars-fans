import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_FILMS, API_PEOPLE, API_PLANETS } from '../../apiConfig';

const urlsForSearch = [
    `${API_URL}${API_FILMS}`,
    `${API_URL}${API_PEOPLE}`,
    `${API_URL}${API_PLANETS}`,
];

// const fetchUrl = async (url) => {
//     const response = await fetch(`${url}?search=${searchStr}`);
//     const data = await response.json();
//     return data;
// };
// Делает запрос JSON данных
const doFetchForJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const jsonData = await response.json();
    return jsonData;
};

// Делает полный запрос ресурса из API
const doFetchFullData = async (url) => {
    const data = await doFetchForJson(url);
    let results = data.results;
    if (data.next !== null) {
        const nextResults = await doFetchFullData(data.next);
        results = [...results, ...nextResults];
    }
    return results;
};

const fetchSuggestions = createAsyncThunk(
    'search/fetchSuggestions',
    async (searchStr) => {
        let searchResults = [];
        for (const url of urlsForSearch) {
            const results = await doFetchFullData(`${url}?search=${searchStr}`);
            searchResults = [...searchResults, ...results];
        }
        console.log(searchResults);
        return searchResults;
        // urlsForSearch.forEach(async (url) => {
        //     const response = await fetch(`${url}?search=${searchStr}`);
        //     const data = await response.json();
        //     searchResults = [...searchResults, data.results];
        // });
        // console.log(searchResults);
        // return searchResults;
    }
);

export { fetchSuggestions };

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

const fetchSuggestions = createAsyncThunk(
    'search/fetchSuggestions',
    async (searchStr) => {
        let searchResults = [];
        for (const url of urlsForSearch) {
            const response = await fetch(`${url}?search=${searchStr}`);
            const data = await response.json();
            searchResults = [...searchResults, ...data.results];
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

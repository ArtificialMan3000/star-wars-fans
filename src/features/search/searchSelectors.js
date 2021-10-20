// Получает данные о результатах поиска
const selectSearchResults = (state) => state.search.results;

// Получает строку поиска
const selectSearchQuery = (state) => state.search.query;

// Получает статус запроса
const selectSearchStatus = (state) => {
    return [state.search.status, state.search.error];
};

export { selectSearchResults, selectSearchQuery, selectSearchStatus };

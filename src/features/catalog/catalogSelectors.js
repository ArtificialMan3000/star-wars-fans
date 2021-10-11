// Получает данные списка элементов
const createCatalogListDataSelector = (sliceName) => {
    return (state) => [
        state[sliceName].list,
        state[sliceName].status,
        state[sliceName].error,
    ];
};
// Получает данные одного элемента
const createCatalogSingleDataSelector = (sliceName) => {
    return (state) => [
        state[sliceName].item,
        state[sliceName].status,
        state[sliceName].error,
    ];
};

export { createCatalogListDataSelector, createCatalogSingleDataSelector };

// Получает списочные элементы каталога определённой категории
const selectCatalogListItems = (type) => {
    return (state) => state.catalog.cache.listItems[type];
};

// Получает элемент каталога
const selectCatalogItem = (type, { id, url }) => {
    return (state) => {
        return state.catalog.cache.items[type]?.find((item) => {
            const res = id ? Number(item.id) === Number(id) : item.url === url;
            return res;
        });
    };
};

// Получает статус запроса
const selectCatalogStatus = (state) => {
    return [state.catalog.status, state.catalog.error];
};

export { selectCatalogListItems, selectCatalogItem, selectCatalogStatus };

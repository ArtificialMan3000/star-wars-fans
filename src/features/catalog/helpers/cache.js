// Добавляет элемент в кеш
const addItemToCache = (state, type, item) => {
    const cache = state.cache.items[type] || [];
    cache.push(item);
    // Кладём элемент в кеш
    state.cache.items[type] = cache;
};

// Кладёт списочные элементы в кеш
const addListItemsToCache = (state, type, list) => {
    // Сохраняем в кеш только нужные поля
    const tightList = list.map(({ id, type, title }) => {
        return { id, type, title };
    });
    state.cache.listItems[type] = tightList;
};

export { addItemToCache, addListItemsToCache };

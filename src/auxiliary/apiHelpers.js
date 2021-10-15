import camelcase from 'lodash.camelcase';

// Методы вывода описаний для разных типов элементов
const VIEW_METHODS = {
    films: {
        method: 'description',
    },
    people: {
        method: 'specificationsList',
        fields: ['birthYear', 'height', 'eyeColor'],
    },
    planets: {
        method: 'specificationsList',
        fields: ['climate', 'diameter', 'terrain'],
    },
};

// Преобразует пришедшие данные для работы на фронтенде
const transformResult = (result) => {
    const transformedResult = {};
    for (const entry of Object.entries(result)) {
        // Переводим ключи в camelCase
        const key = camelcase(entry[0]);
        transformedResult[key] = entry[1];
    }

    // Добавляем поля type и id из url
    const urlParts = result.url.split('/');
    transformedResult.id = urlParts[5];
    transformedResult.type = urlParts[4];

    // Добавляем поле title из name или title записи
    transformedResult.title = transformedResult.title || transformedResult.name;

    // Добавляем метод вывода описания элемента
    transformedResult.view = VIEW_METHODS[transformedResult.type];

    return transformedResult;
};

// Делает запрос JSON данных
const doFetchForJson = async (url) => {
    const response = await fetch(url);
    // TODO Решить как обрабатывать ошибки
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const jsonData = await response.json();
    return jsonData;
};

// Делает запрос одной записи из API
const doFetchSingleItem = async (url) => {
    const item = await doFetchForJson(url);
    return transformResult(item);
};

// Делает полный запрос списка записей из API
const doFetchFullResults = async (url) => {
    const data = await doFetchForJson(url);
    let results = data.results;
    if (data.next !== null) {
        const nextResults = await doFetchFullResults(data.next);
        results = [...results, ...nextResults];
    }
    return results.map((result) => transformResult(result));
};

export {
    transformResult,
    doFetchForJson,
    doFetchSingleItem,
    doFetchFullResults,
};

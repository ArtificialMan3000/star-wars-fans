import camelcase from 'lodash.camelcase';

// Преобразует пришедшие данные для работы на фронтенде
const transformResults = (results) => {
    return results.map((result) => {
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
        return transformedResult;
    });
};

// Делает запрос JSON данных
const doFetchForJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const jsonData = await response.json();
    return jsonData;
};

// Делает полный запрос списка результатов из API
const doFetchFullResults = async (url) => {
    const data = await doFetchForJson(url);
    let results = data.results;
    if (data.next !== null) {
        const nextResults = await doFetchFullResults(data.next);
        results = [...results, ...nextResults];
    }
    return transformResults(results);
};

export { doFetchForJson, doFetchFullResults, transformResults };

// Новая структура хранения API данных
const API_URLS = {
    base: 'https://swapi.dev/api/',
    films: 'films/',
    people: 'people/',
    planets: 'planets/',
    species: 'species/',
    starships: 'starships/',
    vehicles: 'vehicles/',
};

// images:
const IMAGE_ROOT = 'https://starwars-visualguide.com/assets/img/';
const IMAGE_PEOPLE = 'characters';
const IMAGE_PLANETS = 'planets';
const IMAGE_FILMS = 'films';

const URL_IMAGE_PERSON = `${IMAGE_ROOT}${IMAGE_PEOPLE}`;
const URL_IMAGE_PLANET = `${IMAGE_ROOT}${IMAGE_PLANETS}`;
const URL_IMAGE_FILM = `${IMAGE_ROOT}${IMAGE_FILMS}`;

const IMAGE_EXTENSION = '.jpg';

export {
    API_URLS,
    URL_IMAGE_PERSON,
    URL_IMAGE_PLANET,
    URL_IMAGE_FILM,
    IMAGE_EXTENSION,
};

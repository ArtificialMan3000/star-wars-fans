const API_URL = 'https://swapi.dev/api/';
const API_FILMS = 'films/';
const API_PEOPLE = 'people/';
const API_PLANETS = 'planets/';
const API_SPECIES = 'species/';
const API_STARSHIPS = 'starships/';
const API_VEHICLES = 'vehicles/';
const DEBOUNCE_DELAY = 700;

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
    API_URL,
    API_FILMS,
    API_PEOPLE,
    API_PLANETS,
    API_SPECIES,
    API_STARSHIPS,
    API_VEHICLES,
    DEBOUNCE_DELAY,
    URL_IMAGE_PERSON,
    URL_IMAGE_PLANET,
    URL_IMAGE_FILM,
    IMAGE_EXTENSION,
};

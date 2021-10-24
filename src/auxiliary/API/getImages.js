import {
    URL_IMAGE_PERSON,
    URL_IMAGE_PLANET,
    URL_IMAGE_FILM,
    IMAGE_EXTENSION,
} from './apiConfig';

export function getPersonImage(id) {
    return `${URL_IMAGE_PERSON}/${id}${IMAGE_EXTENSION}`;
}

export function getPlanetImage(id) {
    return `${URL_IMAGE_PLANET}/${id}${IMAGE_EXTENSION}`;
}

export function getFilmImage(id) {
    return `${URL_IMAGE_FILM}/${id}${IMAGE_EXTENSION}`;
}

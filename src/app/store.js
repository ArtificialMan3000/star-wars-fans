import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authorization/authSlice';
import { filmsReducer } from '../features/films/filmsList/filmsSlice';
import { singleFilmReducer } from '../features/films/singleFilm/singleFilmSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        films: filmsReducer,
        singleFilm: singleFilmReducer,
    },
});

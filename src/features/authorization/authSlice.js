import { createSlice } from '@reduxjs/toolkit';
import { isCurrUserLoged } from './authThunks';

const initialState = isCurrUserLoged();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading(state) {
            state.progress.status = 'loading';
        },
        validationProgress(state, action) {
            state.progress.message = action.payload.message;
            state.progress.code = action.payload.code;
            state.progress.status = action.payload.status;
        },
        logInUser(state, action) {
            state.user.userName = action.payload.login;
            state.user.userIsLogged = true;
        },
        logOutUser(state) {
            state.user.userName = '';
            state.user.userIsLogged = false;
        },
    },
});

export function selectAuth(state) {
    return state.auth;
}

export const { loading, validationProgress, logInUser, logOutUser } =
    authSlice.actions;
export const authReducer = authSlice.reducer;

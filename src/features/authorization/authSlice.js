import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			userIsLogged: false,
			userName: '',
		},
		progress: {
			status: 'idle',
			message: '',
			code: undefined,
		},
	},
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
	},
});

export function selectAuth(state) {
	return state.auth;
}

export const { loading, validationProgress, logInUser } = authSlice.actions;
export default authSlice.reducer;

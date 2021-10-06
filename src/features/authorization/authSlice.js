import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userIsLogged: false,
		userName: '',
		status: 'idle',
	},
	reducers: {
		signUp(state, action) {
			state.status = 'loading';

			localStorage.setItem(action.payload.login, action.payload.pass);

			state.userName = action.payload.login;
			state.userIsLogged = true;
			state.status = 'idle';
		},
	},
});

export const { signUp } = authSlice.actions;
export default authSlice.reducer;

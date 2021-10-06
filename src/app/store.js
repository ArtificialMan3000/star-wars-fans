import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authorization/authSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
	},
});

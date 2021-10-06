import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodos } from './todosAPI';

export const getTodosAsync = createAsyncThunk('todos/getTodos', async () => {
	const response = await getTodos();
	return response;
});

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		status: 'In Synchronize',
	},
	reducers: {
		edit: {},
	},
	extraReducers: builder => {
		builder
			.addCase(getTodosAsync.pending, state => {
				state.status = 'Loading';
			})
			.addCase(getTodosAsync.fulfilled, (state, action) => {
				state.status = 'In Synchronize';
				state.todos = action.payload;
			});
	},
});

export const selectTodos = state => state.todos.todos;

export const { edit } = todosSlice.actions;
export default todosSlice.reducer;

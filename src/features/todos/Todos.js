import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync, selectTodos } from './todosSlice';

export default function Todos() {
	let todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	todos = todos.map(todo => {
		return <li>{todo.title}</li>;
	});

	console.log(todos);

	return (
		<React.Fragment>
			{(todos.length && <ul>{todos}</ul>) || 'Loading...'}
			<br />
			<button onClick={() => dispatch(getTodosAsync())}>getTodos</button>
		</React.Fragment>
	);
}

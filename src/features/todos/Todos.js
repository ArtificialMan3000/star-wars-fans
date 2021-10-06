import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync, selectTodos } from './todosSlice';
import { useToggle } from '../auxiliary/customHooks';

export default function Todos() {
	let todos = useSelector(selectTodos);
	const dispatch = useDispatch();

	const [visible, toggleVisible] = useToggle(true);

	todos = todos.map(todo => {
		return <li>{todo.title}</li>;
	});

	return (
		<React.Fragment>
			{(visible && todos.length && <ul>{todos}</ul>) || 'Loading...'}
			<br />
			<button onClick={() => dispatch(getTodosAsync())}>getTodos</button>
			<button onClick={toggleVisible}>check toggle</button>
		</React.Fragment>
	);
}

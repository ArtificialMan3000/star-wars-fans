import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../authorization/authSlice';

export default function IsLoggedHead({ userName }) {
	const dispatch = useDispatch();

	return (
		<nav className='header'>
			<ul>
				<li>
					<Link to='/' style={{ marginRight: '5rem' }}>
						{userName}
					</Link>
				</li>
				<li>
					<Link to='/favorites'>Избранное</Link>
				</li>
				<li>
					<Link to='/history'>История</Link>
				</li>
				<li onClick={() => dispatch(logout())}>
					<Link to='/signin'>Выход</Link>
				</li>
			</ul>
		</nav>
	);
}

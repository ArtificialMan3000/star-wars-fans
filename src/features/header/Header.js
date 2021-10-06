import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<nav className='header'>
			<ul>
				<li>
					<NavLink
						to='/'
						exact
						activeStyle={{ color: 'red' }}
						style={{ marginRight: '5rem' }}
					>
						logo
					</NavLink>
				</li>
				<li>
					<NavLink to='/signin' exact activeStyle={{ color: 'red' }}>
						Sign In
					</NavLink>
				</li>
				<li>
					<NavLink to='/signup' exact activeStyle={{ color: 'red' }}>
						Sign Up
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

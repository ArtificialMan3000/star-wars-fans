import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='body'>
			<h1 style={{ color: 'red' }}>404 - Not Found!</h1>
			<Link style={{ color: 'blue' }} to='/'>
				<h3>Go Home</h3>
			</Link>
		</div>
	);
}

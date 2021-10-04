import * as axios from 'axios';

export async function getTodos() {
	try {
		const response = await axios.get('https://repetitora.net/api/JS/Tasks', {
			timeout: 5000,
			params: {
				widgetId: 777999,
				count: 21,
			},
		});
		console.log('Server respond: ', response.data);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

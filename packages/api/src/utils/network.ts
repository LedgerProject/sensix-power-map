import axios from 'axios';
import { isEmpty } from 'lodash';

export const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 20000,
});

instance.interceptors.request.use(async (request) => {
	try {
		if (request.data && !isEmpty(request.data)) {
			Object.keys(request.data).forEach((key) => {
				if (request.data[key] === undefined || request.data[key] === null) {
					delete request.data[key];
				}
			});
		}

		if (request.params && !isEmpty(request.params)) {
			Object.keys(request.params).forEach((key) => {
				if (request.params[key] === undefined || request.params[key] === null) {
					delete request.params[key];
				}
			});
		}
	} catch (error) {
		console.log('Failed to execute the request: ', error.message || error);
	}

	return request;
});

// fallback domain(production) -> will be updated once web package initializes;
let mapDomain = 'agg.sensix.io';

export function buildUrl(endpoint = '') {
	let url = `https://${mapDomain}/api/v1${endpoint}`;

	if (url.charAt(url.length - 1) !== '/') url = `${url}/`;
	return url;
}

export function setApiDomain(newDomain: string) {
	mapDomain = newDomain;
}

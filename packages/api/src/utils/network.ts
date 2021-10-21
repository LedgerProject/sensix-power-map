const MAP_DOMAIN = 'agg.sensix.xyz';

import axios, { AxiosRequestConfig } from 'axios';
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

export function buildUrl(endpoint = '') {
	let url = `https://${MAP_DOMAIN}/api/v1${endpoint}`;

	if (url.charAt(url.length - 1) !== '/') url = `${url}/`;
	return url;
}

const MAP_DOMAIN = 'map.sensix.xyz';

export function buildUrl(endpoint = '') {
	let url = `https://${MAP_DOMAIN}/api/v1${endpoint}`;

	if (url.charAt(url.length - 1) !== '/') url = `${url}/`;
	return url;
}

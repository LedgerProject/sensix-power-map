import { buildUrl } from 'utils';
import axios from 'axios';

const endpoints = {
	base: '/map/',
};

export default () => ({
	getRects: async () => {
		const url = buildUrl(endpoints.base);
		const { data } = await axios.get(url);
		return data;
	},
});

import { buildUrl } from '../../utils';
import { instance as axios } from '../../utils/network';
import { GetCellData, GetCellsOverviewData } from './types';

const endpoints = {
	getAll: '/geohash-area/',
	getOne: (id: string) => `/geohash-area/${id}/`,
};

export default () => ({
	getCells: async () => {
		const url = buildUrl(endpoints.getAll);
		const { data } = await axios.get<GetCellsOverviewData>(url);
		return data;
	},
	getCell: async (input: string) => {
		const url = buildUrl(endpoints.getOne(input));
		const { data } = await axios.get<GetCellData>(url, {});
		return data;
	},
});

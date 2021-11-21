import { RelativeTimeRange } from 'types';
import { buildUrl } from '../../utils';
import { instance as axios } from '../../utils/network';
import { GetCellData, GetCellsOverviewData, GetCellInput } from './types';

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
	getCell: async (input: GetCellInput) => {
		const url = buildUrl(endpoints.getOne(input.id));
		const { data } = await axios.get<GetCellData>(url, {
			params: { relative_time_range: `r${input.timeRange}` },
		});
		return data;
	},
});

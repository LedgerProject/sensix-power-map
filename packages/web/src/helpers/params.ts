import { RelativeTimeRange, RELATIVE_TIME_RANGE_OPTIONS } from '@sensix-map/api';

import { TimeFilters, CellFilters } from 'store/ui/filters';

interface SetQueryParamsInput {
	timeFilters?: TimeFilters;
	cellFilters?: CellFilters;
}

export const QueryParams = {
	parse: function () {
		const time: TimeFilters = {};
		let cell: CellFilters = {};

		new URLSearchParams(window.location.search).forEach((value, key) => {
			if (key === 'range' && Number.parseInt(value)) {
				const candidate = Number.parseInt(value) as RelativeTimeRange;

				if (RELATIVE_TIME_RANGE_OPTIONS.includes(candidate)) {
					time.range = candidate;
				}
			}

			if (key === 'h' && value) {
				cell.id = value;
			}
		});

		return { time, cell };
	},
	set: function ({ timeFilters, cellFilters }: SetQueryParamsInput) {
		const params = new URLSearchParams();

		if (timeFilters?.range !== undefined && timeFilters?.range !== null) {
			params.set('range', timeFilters.range.toString());
		}

		if (cellFilters?.id) {
			params.set('h', cellFilters.id.toString());
		}

		return params;
	}
};

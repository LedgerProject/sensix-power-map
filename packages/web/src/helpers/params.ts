import { RelativeTimeRange, RELATIVE_TIME_RANGE_OPTIONS } from '@sensix-map/api';

import { TimeFilters } from 'store/ui/filters';

interface SetQueryParamsInput {
	timeFilters?: TimeFilters;
}

export const QueryParams = {
	parse: function () {
		const time: TimeFilters = {};

		new URLSearchParams(window.location.search).forEach((value, key) => {
			if (key === 'range' && Number.parseInt(value)) {
				const candidate = Number.parseInt(value) as RelativeTimeRange;

				if (RELATIVE_TIME_RANGE_OPTIONS.includes(candidate)) {
					time.range = candidate;
				}
			}
		});

		return { time };
	},
	set: function ({ timeFilters }: SetQueryParamsInput) {
		const params = new URLSearchParams();

		if (timeFilters?.range !== undefined && timeFilters?.range !== null) {
			params.set('range', timeFilters.range.toString());
		}

		return params;
	}
};

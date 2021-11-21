import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { QueryParams } from 'helpers';
import { useNavigation, useTimeFilters, useCellFilters } from 'hooks';

export function useQueryParams() {
	const location = useLocation();
	const { replace } = useNavigation();
	const timeFilters = useTimeFilters()[0];
	const cellFilters = useCellFilters()[0];

	const { cell, time } = QueryParams.parse();

	useEffect(() => {
		if (cell?.id) {
			QueryParams.set({
				cellFilters: {
					id: cell.id
				}
			});
		}
	}, [cell.id]);

	useEffect(() => {
		if (time?.range) {
			QueryParams.set({
				timeFilters: {
					range: time.range
				}
			});
		}
	}, [time.range]);

	useEffect(() => {
		const params = QueryParams.set({
			timeFilters,
			cellFilters
		});
		replace(location.pathname, params.toString());
		// eslint-disable-next-line
	}, [timeFilters, cellFilters]);
}

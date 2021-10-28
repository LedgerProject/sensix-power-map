import { useDispatch, useSelector } from 'hooks/utils';
import { TimeFilters, applyTimeFilters, selectTimeFilters } from 'store/ui/filters';

export function useTimeFilters(): [TimeFilters, (input: TimeFilters) => void] {
	const dispatch = useDispatch();
	const data = useSelector((state) => selectTimeFilters(state.ui.filters));

	function handler(input: TimeFilters) {
		dispatch(applyTimeFilters(input));
	}

	return [data, handler];
}

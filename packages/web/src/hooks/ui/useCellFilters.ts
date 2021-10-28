import { useDispatch, useSelector } from 'hooks/utils';
import { CellFilters, applyCellFilters, selectCellFilters } from 'store/ui/filters';

export function useCellFilters(): [CellFilters, (input: CellFilters) => void] {
	const dispatch = useDispatch();
	const data = useSelector((state) => selectCellFilters(state.ui.filters));

	function handler(input: CellFilters) {
		console.log('in hook', input);
		dispatch(applyCellFilters(input));
	}

	return [data, handler];
}

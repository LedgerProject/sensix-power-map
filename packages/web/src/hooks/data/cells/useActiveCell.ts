import { selectActiveCell } from 'store/data/cells';
import { useSelector, useDispatch } from 'hooks';
import { setActiveCell } from 'store/data/cells';

export function useActiveCell(): [string | null, (id: string | null) => void] {
	const dispatch = useDispatch();

	const data = useSelector((state) => selectActiveCell(state.data.cells));

	function handler(id: string | null) {
		dispatch(setActiveCell(id));
	}

	return [data, handler];
}

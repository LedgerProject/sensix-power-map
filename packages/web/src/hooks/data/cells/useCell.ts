import { selectCellById, getCell } from 'store/data/cells';
import { useSelector, useDispatch } from 'hooks';
import { CellData } from '@sensix-map/api';

export function useCell(id: string | undefined): [CellData | undefined, (id: string) => void] {
	const dispatch = useDispatch();

	const data = useSelector((state) => selectCellById(state.data.cells, id));

	function handler(id: string) {
		dispatch(getCell(id));
	}
	return [data, handler];
}

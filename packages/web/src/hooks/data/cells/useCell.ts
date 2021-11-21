import { selectCellById, getCell } from 'store/data/cells';
import { useSelector, useDispatch } from 'hooks';
import { CellData, GetCellInput } from '@sensix-map/api';

export function useCell(
	id: string | undefined
): [CellData | undefined, (input: GetCellInput) => void] {
	const dispatch = useDispatch();

	const data = useSelector((state) => selectCellById(state.data.cells, id));

	function handler(input: GetCellInput) {
		dispatch(getCell(input));
	}
	return [data, handler];
}

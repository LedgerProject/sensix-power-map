import { Thunk } from 'store';
import { SetActiveCellAction } from '.';
import { ActionType, GetCellsAction } from './types';

const getCellsAction = (data: any): GetCellsAction => ({
	type: ActionType.GET_CELLS,
	payload: data
});

export const getCells = (): Thunk => async (dispatch, _, context) => {
	const data = await context.api.data.map().getRects();
	dispatch(getCellsAction(data));
};

const setActiveCellAction = (cell: number | null): SetActiveCellAction => ({
	type: ActionType.SET_ACTIVE_CELL,
	payload: cell
});

export const setActiveCell =
	(id: number | null): Thunk =>
	async (dispatch) => {
		dispatch(setActiveCellAction(id));
	};

import { GetCellsOverviewData, GetCellData, GetCellInput } from '@sensix-map/api';
import { Thunk } from 'store';
import { ActionType, GetCellsAction, GetCellAction, SetActiveCellAction } from './types';

const getCellsAction = (data: GetCellsOverviewData): GetCellsAction => ({
	type: ActionType.GET_CELLS,
	payload: { data }
});

export const getCells = (): Thunk => async (dispatch, _, context) => {
	const data = await context.api.data.cells().getCells();
	dispatch(getCellsAction(data));
};

const getCellAction = (data: GetCellData): GetCellAction => ({
	type: ActionType.GET_CELL,
	payload: { data }
});

export const getCell =
	(input: GetCellInput): Thunk =>
	async (dispatch, _, context) => {
		const data = await context.api.data.cells().getCell(input);
		dispatch(getCellAction(data));
	};

const setActiveCellAction = (cell: string | null): SetActiveCellAction => ({
	type: ActionType.SET_ACTIVE_CELL,
	payload: cell
});

export const setActiveCell =
	(id: string | null): Thunk =>
	async (dispatch) => {
		dispatch(setActiveCellAction(id));
	};

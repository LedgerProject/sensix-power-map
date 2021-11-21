import { GetCellsOverviewData, CellData, CellOverviewData } from '@sensix-map/api';
import { Action } from 'redux';

export enum ActionType {
	GET_CELLS = 'data/cells/GET_CELLS',
	GET_CELL = 'data/cells/GET_CELL',
	SET_ACTIVE_CELL = 'data/cells/SET_ACTIVE_CELL'
}

export interface GetCellsAction extends Action {
	type: ActionType.GET_CELLS;
	payload: {
		data: GetCellsOverviewData;
	};
}

export interface GetCellAction extends Action {
	type: ActionType.GET_CELL;
	payload: {
		data: CellData;
	};
}

export interface SetActiveCellAction extends Action {
	type: ActionType.SET_ACTIVE_CELL;
	payload: string | null;
}

export interface State {
	cells: {
		overview: CellOverviewData[];
		byId: {
			[key: string]: CellData;
		};
		ids: string[];
		active: null | string;
	};
}

export type Actions = GetCellsAction | GetCellAction | SetActiveCellAction;

import { Action } from 'redux';
import { ICell } from 'types';

export enum ActionType {
	GET_CELLS = 'data/cells/GET_CELLS',
	SET_ACTIVE_CELL = 'data/cells/SET_ACTIVE_CELL'
}

export interface GetCellsAction extends Action {
	type: ActionType.GET_CELLS;
	payload: any;
}

export interface SetActiveCellAction extends Action {
	type: ActionType.SET_ACTIVE_CELL;
	payload: number | null;
}

export interface State {
	cells: {
		byId: {
			[key: string]: ICell;
		};
		ids: number[];
		active: null | number;
	};
}

export type Actions = GetCellsAction | SetActiveCellAction;

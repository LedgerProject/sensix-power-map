import { Action } from 'redux';
import { Nullable } from 'types';
import { RelativeTimeRange } from '@sensix-map/api';
export interface TimeFilters {
	range?: Nullable<RelativeTimeRange>;
}

export interface CellFilters {
	id?: string;
}

export interface State {
	time: TimeFilters;
	cell: CellFilters;
}

export enum ActionType {
	APPLY_TIME_FILTERS = 'ui/filters/APPLY_TIME_FILTERS',
	APPLY_CELL_FILTERS = 'ui/filters/APPLY_CELL_FILTERS'
}

export interface ApplyTimeFiltersAction extends Action {
	type: ActionType.APPLY_TIME_FILTERS;
	payload: {
		filters: TimeFilters;
	};
}

export interface ApplyCellFiltersAction extends Action {
	type: ActionType.APPLY_CELL_FILTERS;
	payload: {
		filters: CellFilters;
	};
}

export type Actions = ApplyTimeFiltersAction | ApplyCellFiltersAction;

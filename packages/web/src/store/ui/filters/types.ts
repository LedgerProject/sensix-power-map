import { Action } from 'redux';
import { Nullable } from 'types';
import { RelativeTimeRange } from '@sensix-map/api';

export interface TimeFilters {
	range?: Nullable<RelativeTimeRange>;
}

export interface State {
	time: TimeFilters;
}

export enum ActionType {
	APPLY_TIME_FILTERS = 'ui/filters/APPLY_TIME_FILTERS'
}

export interface ApplyTimeFiltersAction extends Action {
	type: ActionType.APPLY_TIME_FILTERS;
	payload: {
		filters: TimeFilters;
	};
}

export type Actions = ApplyTimeFiltersAction;

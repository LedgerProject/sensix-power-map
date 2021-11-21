import { Thunk } from 'store/types';
import {
	ApplyTimeFiltersAction,
	ApplyCellFiltersAction,
	CellFilters,
	TimeFilters,
	ActionType
} from './types';

const applyTimeFiltersAction = (filters: TimeFilters): ApplyTimeFiltersAction => ({
	type: ActionType.APPLY_TIME_FILTERS,
	payload: {
		filters
	}
});

export const applyTimeFilters =
	(filters: TimeFilters): Thunk =>
	async (dispatch) => {
		try {
			dispatch(applyTimeFiltersAction(filters));
		} catch (e) {
			console.log(e);
		}
	};

const applyCellFiltersAction = (filters: CellFilters): ApplyCellFiltersAction => ({
	type: ActionType.APPLY_CELL_FILTERS,
	payload: {
		filters
	}
});

export const applyCellFilters =
	(filters: CellFilters): Thunk =>
	async (dispatch) => {
		try {
			dispatch(applyCellFiltersAction(filters));
		} catch (e) {
			console.log(e);
		}
	};

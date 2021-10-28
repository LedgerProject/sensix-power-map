import { Thunk } from 'store/types';
import { ApplyTimeFiltersAction, TimeFilters, ActionType } from './types';

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

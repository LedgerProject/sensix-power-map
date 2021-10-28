import produce from 'immer';
import initialState from './initialState';
import { Actions as FiltersActions, State, ActionType as FiltersActionType } from './types';

const reducer = (state: State = initialState, action: FiltersActions): State => {
	switch (action.type) {
		case FiltersActionType.APPLY_TIME_FILTERS: {
			const { filters } = action.payload;

			return produce(state, (draft) => {
				draft.time = filters;
			});
		}

		case FiltersActionType.APPLY_CELL_FILTERS: {
			const { filters } = action.payload;

			return produce(state, (draft) => {
				draft.cell = filters;
			});
		}

		default: {
			return state;
		}
	}
};

export default reducer;

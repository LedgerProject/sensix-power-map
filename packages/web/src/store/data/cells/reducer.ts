import produce from 'immer';
import { initialState } from './initialState';
import { ActionType, Actions as CellActions, State } from './types';

function cellsReducer(state: State = initialState, action: CellActions): State {
	switch (action.type) {
		case ActionType.GET_CELLS: {
			const {
				data: { results }
			} = action.payload;
			return produce(state, (draft) => {
				results.forEach((d) => {
					const ids = draft.cells.overview.map((d) => d.h);
					if (!ids.includes(d.h)) {
						draft.cells.overview.push(d);
					}
				});
			});
		}

		case ActionType.GET_CELL: {
			const { data } = action.payload;

			return produce(state, (draft) => {
				if (!draft.cells.byId[data.h]) {
					draft.cells.byId[data.h] = data;
				}
			});
		}

		case ActionType.SET_ACTIVE_CELL: {
			return produce(state, (draft) => {
				const cell = action.payload;

				draft.cells.active = cell;
			});
		}

		default: {
			return state;
		}
	}
}
export default cellsReducer;

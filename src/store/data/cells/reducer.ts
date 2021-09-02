import produce from "immer";
import { initialState } from "./initialState";
import { ActionType, Actions, State } from "./types";

import { mockData as results } from "./mock";

function cellsReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.GET_CELLS: {
      // mocked for now
      return produce(state, (draft) => {
        results.forEach((d) => {
          if (!draft.cells.byId[d.id]) draft.cells.byId[d.id] = d;
          if (!draft.cells.ids.includes(d.id)) draft.cells.ids.push(d.id);
        });
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

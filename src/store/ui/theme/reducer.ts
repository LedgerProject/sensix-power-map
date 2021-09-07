import initialState from "./initialState";
import { ActionType, Actions, State } from "./types";
import { produce } from "immer";

const themeReducer = function (
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.TOGGLE_THEME: {
      return produce(state, (draft) => {
        draft.active = action.payload.theme;
      });
    }

    case ActionType.SET_ZOOM: {
      return produce(state, (draft) => {
        draft.zoom = action.payload.zoom;
      });
    }

    default: {
      return state;
    }
  }
};

export default themeReducer;

import initialState from "./initialState";
import { ActionType, Actions, State } from "./types";

const themeReducer = function (
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.TOGGLE_THEME: {
      return { ...state, active: action.payload.theme };
    }

    default: {
      return state;
    }
  }
};

export default themeReducer;

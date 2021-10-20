import { combineReducers } from "redux";
import { State as Theme, reducer as theme } from "./ui/theme";
import { State as Cells, reducer as cells } from "./data/cells";
import { ApplicationActions } from "./types";

export interface ApplicationState {
  ui: {
    theme: Theme;
  };
  data: {
    cells: Cells;
  };
}

const appReducer = combineReducers<ApplicationState>({
  ui: combineReducers({
    theme,
  }),
  data: combineReducers({
    cells,
  }),
});

function rootReducer(
  state: ApplicationState | undefined,
  action: ApplicationActions
) {
  return appReducer(state, action);
}

export default rootReducer;

import { combineReducers } from "redux";
import { State as Theme, reducer as theme } from "./ui/theme";
import { ApplicationActions } from "./types";

export interface ApplicationState {
  ui: {
    theme: Theme;
  };
}

const appReducer = combineReducers<ApplicationState>({
  ui: combineReducers({
    theme,
  }),
});

function rootReducer(
  state: ApplicationState | undefined,
  action: ApplicationActions
) {
  function resetState() {
    if (state) {
      return;
    }
  }

  return appReducer(state, action);
}

export default rootReducer;

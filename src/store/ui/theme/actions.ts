import { ActionCreator } from "redux";

import { Thunk } from "store/types";
import { ActionType, Theme, ToggleThemeAction } from "./types";

const toggleThemeAction: ActionCreator<ToggleThemeAction> = (theme: Theme) => ({
  type: ActionType.TOGGLE_THEME,
  payload: {
    theme,
  },
});

export const toggleTheme = (): Thunk => async (dispatch, getState) => {
  const { ui } = getState();
  const theme = ui.theme.active === "light" ? "dark" : "light";
  dispatch(toggleThemeAction(theme));
  localStorage.set("powermap-theme", theme);
};

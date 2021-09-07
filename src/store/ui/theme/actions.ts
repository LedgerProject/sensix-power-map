import { ActionCreator } from "redux";

import { Thunk } from "store/types";
import { SetZoomAction } from ".";
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
  localStorage.setItem("powermap-theme", theme);
};

const setZoomAction: ActionCreator<SetZoomAction> = (zoom: number) => ({
  type: ActionType.SET_ZOOM,
  payload: {
    zoom,
  },
});

export const setZoom =
  (zoom: number): Thunk =>
  async (dispatch) => {
    dispatch(setZoomAction(zoom));
  };

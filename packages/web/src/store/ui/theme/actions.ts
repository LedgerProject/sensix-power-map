import { LatLngLiteral } from "leaflet";
import { ActionCreator } from "redux";

import { Thunk } from "store/types";
import { SetCenterAction, SetZoomAction } from "store/ui/theme";
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

const setCenterAction: ActionCreator<SetCenterAction> = (
  center: LatLngLiteral
) => ({
  type: ActionType.SET_CENTER,
  payload: {
    center,
  },
});

export const setCenter =
  (center: LatLngLiteral): Thunk =>
  async (dispatch) => {
    dispatch(setCenterAction(center));
  };

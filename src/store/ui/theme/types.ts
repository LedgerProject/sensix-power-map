import { Action } from "redux";
import { themes } from "environment/theme/themes";

export type Theme = keyof typeof themes;

export interface State {
  active: Theme;
  zoom: number | null;
}

export enum ActionType {
  TOGGLE_THEME = "ui/theme/TOGGLE_THEME",
  SET_ZOOM = "ui/theme/SET_ZOOM",
}

export interface ToggleThemeAction extends Action {
  type: ActionType.TOGGLE_THEME;
  payload: {
    theme: Theme;
  };
}

export interface SetZoomAction extends Action {
  type: ActionType.SET_ZOOM;
  payload: {
    zoom: number;
  };
}

export type Actions = ToggleThemeAction | SetZoomAction;

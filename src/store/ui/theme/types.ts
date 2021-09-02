import { Action } from "redux";
import { themes } from "environment/theme/themes";

export type Theme = keyof typeof themes;

export interface State {
  active: Theme;
}

export enum ActionType {
  TOGGLE_THEME = "ui/theme/TOGGLE_THEME",
}

export interface ToggleThemeAction extends Action {
  type: ActionType.TOGGLE_THEME;
  payload: {
    theme: Theme;
  };
}

export type Actions = ToggleThemeAction;

import { ThunkAction, ThunkDispatch as Dispatch } from "redux-thunk";
import { Actions as ThemeActions } from "./ui/theme";
import { ApplicationState } from "./root";

export type ApplicationActions = ThemeActions;

export type Thunk = ThunkAction<
  Promise<void>,
  ApplicationState,
  ThunkContext,
  ApplicationActions
>;
export type ThunkDispatch = Dispatch<
  ApplicationState,
  ThunkContext,
  ApplicationActions
>;

export interface ThunkContext {}

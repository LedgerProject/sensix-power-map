import { createSelector } from "reselect";
import { themes } from "environment/theme/themes";
import { State } from "./types";

export const selectActiveTheme = createSelector(
  (state: State) => state.active,
  (theme) => theme
);

export const selectTheme = createSelector(
  (state: State) => state.active,
  (theme) => themes[theme]
);

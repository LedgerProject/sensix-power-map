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

export const selectZoom = createSelector(
  (state: State) => state.zoom,
  (zoom) => zoom
);

export const selectCenter = createSelector(
  (state: State) => state.center,
  (center) => center
);

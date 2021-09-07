import { State, Theme } from "./types";

const systemPrefersDark = window.matchMedia
  ? window.matchMedia("(prefers-color-scheme: dark)").matches
  : undefined;

let active: Theme = systemPrefersDark ? "dark" : "light";
const theme = localStorage.getItem("powermap-theme");

if (theme) {
  active = theme as Theme;
}

const initialState: State = {
  active,
  zoom: null,
  center: null,
};

export default initialState;

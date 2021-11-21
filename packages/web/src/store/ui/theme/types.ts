import { Action } from 'redux';
import { themes } from 'environment/theme/themes';
import { LatLngLiteral } from 'leaflet';

export type Theme = keyof typeof themes;

export interface State {
	active: Theme;
	zoom: number;
	center: LatLngLiteral;
}

export enum ActionType {
	TOGGLE_THEME = 'ui/theme/TOGGLE_THEME',
	SET_ZOOM = 'ui/theme/SET_ZOOM',
	SET_CENTER = 'ui/theme/SET_CENTER'
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

export interface SetCenterAction extends Action {
	type: ActionType.SET_CENTER;
	payload: {
		center: LatLngLiteral;
	};
}

export type Actions = ToggleThemeAction | SetZoomAction | SetCenterAction;

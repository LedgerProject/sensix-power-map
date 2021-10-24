import { State, Theme } from './types';
import { LatLngLiteral } from 'leaflet';

const defaultMapCenter: LatLngLiteral = {
	lat: 46.6427,
	lng: 25.5887
};

const systemPrefersDark = window.matchMedia
	? window.matchMedia('(prefers-color-scheme: dark)').matches
	: undefined;

let active: Theme = systemPrefersDark ? 'dark' : 'light';
const theme = localStorage.getItem('powermap-theme');

if (theme) {
	active = theme as Theme;
}

const initialState: State = {
	active: active || 'light',
	zoom: 8,
	center: defaultMapCenter
};

export default initialState;

import { combineReducers } from 'redux';

import { State as Auth, reducer as auth } from './auth';

import { State as Theme, reducer as theme } from './ui/theme';
import { State as Cells, reducer as cells } from './data/cells';
import { ApplicationActions } from './types';

export interface ApplicationState {
	ui: {
		theme: Theme;
	};
	data: {
		cells: Cells;
	};
	auth: {
		auth: Auth;
	};
}

const appReducer = combineReducers<ApplicationState>({
	ui: combineReducers({
		theme
	}),
	data: combineReducers({
		cells
	}),
	auth: combineReducers({
		auth
	})
});

function rootReducer(state: ApplicationState | undefined, action: ApplicationActions) {
	return appReducer(state, action);
}

export default rootReducer;

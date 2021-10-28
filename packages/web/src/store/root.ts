import { combineReducers } from 'redux';

import { State as Auth, reducer as auth } from './auth';

import { State as Theme, reducer as theme } from './ui/theme';
import { State as Filters, reducer as filters } from './ui/filters';
import { State as Cells, reducer as cells } from './data/cells';
import { ApplicationActions } from './types';

export interface ApplicationState {
	ui: {
		theme: Theme;
		filters: Filters;
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
		theme,
		filters
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

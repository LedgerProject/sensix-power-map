import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThunkDispatch } from './types';
import { factory } from '@sensix/map-api';

import thunk from 'redux-thunk';

import reducer from './root';

export const api = factory();

const configureStore = () => {
	const middleware =
		process.env.NODE_ENV === 'development'
			? composeWithDevTools(applyMiddleware<ThunkDispatch>(thunk.withExtraArgument({ api })))
			: applyMiddleware<ThunkDispatch>(thunk.withExtraArgument({ api }));
	const store = createStore(reducer, middleware);

	return store;
};

export const store = configureStore();

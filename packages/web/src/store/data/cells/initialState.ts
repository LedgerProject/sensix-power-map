import { State } from './types';

export const initialState: State = {
	cells: {
		overview: [],
		byId: {},
		ids: [],
		active: null
	}
};

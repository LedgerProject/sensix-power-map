import { createSelector } from 'reselect';
import { State } from './types';

export const selectTimeFilters = createSelector(
	(state: State) => state.time,
	(filters) => filters
);

export const selectCellFilters = createSelector(
	(state: State) => state.cell,
	(filters) => filters
);

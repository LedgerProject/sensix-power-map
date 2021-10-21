import { cells } from './api/cells';

export const factory = () => ({
	data: {
		cells: () => cells(),
	},
});

export type ApiFactory = ReturnType<typeof factory>;

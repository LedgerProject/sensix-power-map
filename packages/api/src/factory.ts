import { map } from './api/map';

export const factory = () => ({
	data: {
		map: () => map(),
	},
});

export type ApiFactory = ReturnType<typeof factory>;

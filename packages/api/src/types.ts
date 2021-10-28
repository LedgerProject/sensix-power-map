export const RELATIVE_TIME_RANGE_OPTIONS = <const>[3, 8, 24, 48];
export interface Metadata {
	next: string | null;
	previous: string | null;
	count: number;
}

export enum CellStatusLevel {
	CriticalHigh,
	CriticalLow,
	WarningHigh,
	WarningLow,
	Optimal,
	None,
}

export interface DataPoint {
	x: number;
	y: number;
	min?: number;
	max?: number;
	cnt?: number;
}

export enum CellStatus {
	Critical,
	Warning,
	Optimal,
	None,
}

export interface Suggestion<I extends number | string> {
	id: I;
	name: string;
}

export type RelativeTimeRange = typeof RELATIVE_TIME_RANGE_OPTIONS[number];

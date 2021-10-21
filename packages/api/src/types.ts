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

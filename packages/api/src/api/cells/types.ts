import { RelativeTimeRange } from 'index';
import { Metadata, CellStatus, CellStatusLevel, DataPoint } from '../../types';

export type RelativeTimeRangeOption = 'r0' | 'r3' | 'r24' | 'r48';

export interface CellOverviewData {
	r: RelativeTimeRangeOption;
	cid: string;
	h: string; // hash
	sid: CellStatus;
}

export interface GetCellsOverviewData extends Metadata {
	results: CellOverviewData[];
}

export interface HarmonicDistortionsLineData {
	sid: CellStatus;
	slid: CellStatusLevel;
	value: number;
	values: DataPoint[];
}

export interface HarmonicDistortionsBarData {
	x: number;
	y1: number;
	y2: number;
}

export interface Metric {
	name: string;
	text: string;
	units: string;
}

export interface HarmonicDistorsionsMetadata {
	[key: string]: Metric;
}

export interface HarmonicDistorsionsData {
	HDs: HarmonicDistortionsBarData[];
	metrics: {
		THI: HarmonicDistortionsLineData;
		THV: HarmonicDistortionsLineData;
	};
	order: string[];
}

export interface HarmonicDistorsionsCell extends CellOverviewData {
	metadata: HarmonicDistorsionsMetadata;
	data: HarmonicDistorsionsData;
}

export interface GetCellInput {
	id: string;
	timeRange: RelativeTimeRange;
}

export type CellData = HarmonicDistorsionsCell;

export type GetCellData = CellData;

export interface GridProps {
	columnsPerRow: number;
	gutter: number;
	offset: number;
	resizing: boolean;
}

export type Position = 'bottom' | 'top' | 'left' | 'right';
export interface LayoutStyleProps {
	height?: number | string;
	margin?: PlacementProps;
	padding?: PlacementProps;
	width?: number | string;
}

export interface LayoutFlexProps {
	flex?: number | string;
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	align?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
}

export interface PlacementProps {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

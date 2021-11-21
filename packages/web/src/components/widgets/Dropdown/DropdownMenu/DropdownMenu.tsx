import React, { useMemo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { LayoutStyleProps, PlacementProps, Position } from 'types';

import { Menu } from './DropdownMenu.style';

function computePosition(
	bounds: ClientRect,
	margin?: PlacementProps,
	offset?: PlacementProps,
	position?: Position
) {
	let top = margin?.top ? margin.top * 10 : 0;
	const bottom = margin?.bottom ? margin.bottom * 10 : 0;
	let left = margin?.left ? margin.left * 10 : 0;
	const right = margin?.right ? margin.right * 10 : 0;

	const style: React.CSSProperties = {
		top,
		bottom,
		left,
		right
	};

	if (bounds.height) {
		top += bounds.height + 4;
		delete style.bottom;
	}

	if (offset) {
		if (offset.top) {
			top += offset.top;
			style.top = top;
		}

		if (offset.bottom) {
			style.bottom = offset.bottom;
			delete style.top;
		}

		if (offset.left) {
			left += offset.left;
			style.left = left;
		}

		if (offset.right) {
			style.right = offset.right;
			delete style.left;
		}
	}

	style.top = top;

	if (position === 'right') {
		delete style.left;
	}

	return style;
}

interface Props extends LayoutStyleProps {
	bounds: ClientRect;
	children: React.ReactNode;
	headerComponent?: React.ReactNode;
	label?: string;
	offset?: PlacementProps;
	position?: Position;
	width?: number | string;
}

export const DropdownMenu = React.forwardRef<HTMLDivElement, Props>(function (
	{ bounds, children, headerComponent, label, margin, offset, position, width },
	ref
) {
	const style = useMemo(
		() => computePosition(bounds, margin, offset, position),
		[bounds, margin, offset, position]
	);

	return (
		<Menu aria-label={label} ref={ref} role="listbox" style={style} width={width}>
			<Scrollbars
				autoHeight
				renderTrackHorizontal={(props) => <div {...props} className="horizontal-track" />}
			>
				{headerComponent}
				{children}
			</Scrollbars>
		</Menu>
	);
});

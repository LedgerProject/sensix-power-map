import React from 'react';

import { Colors } from 'environment';
import { LayoutStyleProps, RequireOnlyOne } from 'types';

import { parseIconType, IconType } from './Icon.parser';
import { Container, Link } from './Icon.style';

interface BaseProps extends LayoutStyleProps {
	active?: boolean;
	className?: string;
	color?: string;
	disabled?: boolean;
	interactable?: boolean;
	opacity?: number;
	size?: number;
	style?: React.CSSProperties;
	to?: string;
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
	onMouseOver?: () => void;
	onMouseOut?: () => void;
}

interface TypeProps {
	name: string;
	type: (types: typeof IconType) => string;
}

type Props = BaseProps & RequireOnlyOne<TypeProps>;

export const Icon = React.forwardRef<HTMLDivElement, Props>(function (
	{
		active = false,
		className,
		color = Colors.bluishGrey,
		disabled = false,
		interactable = true,
		margin,
		name,
		opacity = 1,
		size = 4,
		style,
		to,
		type,
		onClick,
		onMouseOut,
		onMouseOver
	},
	ref
) {
	const t = type ? type(IconType) : name;
	const Component = parseIconType(t);

	function handleClick(e: React.MouseEvent) {
		if (!disabled && onClick) {
			onClick(e);
		}
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (e.key === 'Enter' && !disabled && onClick) {
			e.preventDefault();
			e.stopPropagation();
			// @ts-ignore: A keyboard event is fine here
			onClick(e);
		}
	}

	if (to) {
		return (
			<Container
				active={active}
				color={color}
				className={className}
				disabled={disabled}
				interactable={interactable}
				margin={margin}
				ref={ref}
				size={size}
				style={style}
				tabIndex={!disabled && to ? 0 : undefined}
				onKeyDown={handleKeyDown}
			>
				<Link isActive={() => active} to={to}>
					{Component && <Component opacity={opacity} />}
				</Link>
			</Container>
		);
	}

	return (
		<Container
			active={active}
			className={className}
			color={color}
			disabled={disabled}
			interactable={interactable && !!onClick}
			margin={margin}
			ref={ref}
			size={size}
			style={style}
			tabIndex={!disabled && onClick ? 0 : undefined}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			onMouseOut={onMouseOut}
			onMouseOver={onMouseOver}
		>
			{Component && <Component opacity={opacity} />}
		</Container>
	);
});

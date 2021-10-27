import styled, { css } from 'styled-components/macro';
import { LayoutStyleProps } from 'types';

interface Props extends LayoutStyleProps {
	$disabled: boolean;
	$focused: boolean;
	$minimal: boolean;
	$open: boolean;
	$invalid: boolean;
}

export const Toggle = styled.div<Props>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ $open, theme }) =>
		$open ? theme.dropdown.normal.open.background : theme.dropdown.normal.background};
	/* border: 0.1rem solid
		${({ $focused, $minimal, $invalid, theme }) =>
			$minimal
				? theme.dropdown.minimal.background.base
				: $focused
				? theme.input.focus
				: $invalid
				? theme.input.invalid
				: theme.dropdown.normal.color}; */
	color: ${({ $minimal, theme, $open }) =>
		$open
			? theme.dropdown.normal.open.color
			: !$minimal
			? theme.dropdown.minimal.color.base
			: theme.dropdown.normal.color};
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-size: 1.6rem;
	font-weight: ${({ $minimal }) => !$minimal && 600};
	height: ${({ $minimal }) => ($minimal ? '4rem' : '5.6rem')};
	margin-top: ${({ margin }) => (margin?.top ? `${margin.top}rem` : undefined)};
	margin-bottom: ${({ margin }) => (margin?.bottom ? `${margin.bottom}rem` : undefined)};
	margin-left: ${({ margin }) => (margin?.left ? `${margin.left}rem` : undefined)};
	margin-right: ${({ margin }) => (margin?.right ? `${margin.right}rem` : undefined)};
	outline: none;
	padding-left: 1rem;
	border-radius:${({ $minimal }) => ($minimal ? '0.8rem' : 0)};
	transition: background 0.2s, border-color 0.2s, color 0.2s;
	width: ${({ width = 30 }) =>
		width !== undefined ? (typeof width === 'string' ? width : `${width}rem`) : 'auto'};

	svg {
		transform: ${({ $open }) => $open && 'rotate(180deg)'};
		transition: transform 0.3s;

		path {
			fill: ${({ $minimal, theme }) =>
				$minimal ? theme.dropdown.minimal.color.base : theme.dropdown.icon};
			transition: fill 0.2s;
		}
	}

	:hover {
		background: ${({ $open, theme }) =>
			$open ? theme.dropdown.normal.open : theme.dropdown.minimal.background.hover};
		border-color: ${({ $disabled, $minimal, theme }) =>
			$disabled
				? theme.dropdown.normal.color
				: $minimal
				? theme.dropdown.minimal.background.hover
				: theme.input.focus};
		color: ${({ $minimal, theme }) => $minimal && theme.dropdown.minimal.color.hover};

		svg {
			path {
				fill: ${({ $minimal, theme }) => $minimal && theme.dropdown.minimal.color.hover};
			}
		}
	}

	${({ $disabled }) =>
		$disabled &&
		css`
			cursor: not-allowed;
			opacity: 0.25;
		`}
`;

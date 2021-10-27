import styled, { css } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Colors } from 'environment';
import { LayoutStyleProps } from 'types';

interface ContainerProps extends LayoutStyleProps {
	active: boolean;
	color: string;
	disabled: boolean;
	interactable: boolean;
	size: number;
}

export const Container = styled.div<ContainerProps>`
	border: none;
	outline: none;
	background: transparent;
	border-radius: 50%;
	position: relative;
	display: flex;
	align-items: center;
	cursor: ${({ disabled, interactable }) =>
		disabled ? 'not-allowed' : interactable ? 'pointer' : undefined};
	height: fit-content;
	margin-top: ${({ margin }) => (margin?.top ? `${margin.top}rem` : undefined)};
	margin-bottom: ${({ margin }) => (margin?.bottom ? `${margin.bottom}rem` : undefined)};
	margin-left: ${({ margin }) => (margin?.left ? `${margin.left}rem` : undefined)};
	margin-right: ${({ margin }) => (margin?.right ? `${margin.right}rem` : undefined)};

	a {
		z-index: 1;
	}

	svg {
		height: ${({ size }) => `${size}rem`};
		width: ${({ size }) => `${size}rem`};
		z-index: 1;

		path {
			fill: ${({ active, color }) => (active ? Colors.indigo : color)};
		}

		line {
			stroke: ${({ active, color }) => (active ? Colors.indigo : color)};
		}
	}

	${({ active, size }) =>
		active &&
		css`
			cursor: default;

			svg {
				path {
					fill: ${({ theme }) => theme.icon.active.color};
				}
			}

			&::before {
				content: '';
				background-color: ${({ theme }) => theme.icon.active.background};
				height: 4rem;
				width: 4rem;
				position: absolute;
				left: calc(calc(4rem - ${size}rem) * -0.5);
				top: calc(calc(4rem - ${size}rem) * -0.5);
				border-radius: 0.4rem;
			}
		`}

	${({ active, disabled, interactable }) =>
		interactable &&
		!disabled &&
		css`
			:focus,
			:hover {
				svg {
					path {
						fill: ${({ theme }) =>
							active ? theme.icon.active.color : theme.icon.hover.color};
					}

					line {
						stroke: ${({ theme }) =>
							active ? theme.icon.active.color : theme.icon.hover.color};
					}
				}
			}
		`}
`;

export const Link = styled(NavLink)`
	position: relative;
	&.active {
		color: ${({ theme }) => theme.navbar.active};

		svg {
			path {
				fill: ${({ theme }) => theme.navbar.active};
			}
		}
		font-weight: 600;
		position: relative;
		// Green line next to sidebar icon
		:before {
			content: '';
			position: absolute;
			top: -0.8rem;
			left: -1.6rem;
			height: 4rem;
			width: 2px;
			background-color: ${Colors.green};
		}
	}
`;

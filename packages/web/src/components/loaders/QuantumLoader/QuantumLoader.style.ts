import styled, { css } from 'styled-components/macro';
import { Colors } from 'environment';

export interface LoaderProps {
	color?: string;
	hidden?: boolean;
	size?: number;
}

export const Loader = styled.div<LoaderProps>`
	${({ color = Colors.green, hidden = false, size = 2 }) => css`
		background-color: ${Colors.transparent};
		position: relative;
		height: ${size}rem;
		width: ${size}rem;
		opacity: ${Number(!hidden)};
		transform-origin: center center;
		border-radius: 50%;
		border: ${size * 0.05}rem solid rgba(0, 0, 0, 0);
		border-top-color: ${color};
		animation: momentum 2s linear infinite;

		::before {
			content: '';
			position: absolute;
			transform-origin: center center;
			top: calc((${size}rem * 0.2 / 2) - ${size * 0.05}rem);
			left: calc((${size}rem * 0.2 / 2) - ${size * 0.05}rem);
			width: calc(${size}rem * 0.8);
			height: calc(${size}rem * 0.8);
			border-radius: 50%;
			border: ${size * 0.05}rem solid rgba(0, 0, 0, 0);
			border-top-color: ${color};
			opacity: 0.6;
			filter: hue-rotate(3eg);
			animation: momentum 4s linear infinite;
		}

		::after {
			content: '';
			position: absolute;
			top: calc((${size}rem * 0.4 / 2) - ${size * 0.05}rem);
			left: calc((${size}rem * 0.4 / 2) - ${size * 0.05}rem);
			width: calc(${size}rem * 0.6);
			height: calc(${size}rem * 0.6);
			border-radius: 50%;
			transform-origin: center center;
			border: ${size * 0.05}rem solid rgba(0, 0, 0, 0);
			border-top-color: ${color};
			opacity: 0.3;
			filter: hue-rotate(6eg);
			animation: momentum 2s linear infinite;
		}
	`}

	@keyframes momentum {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
`;

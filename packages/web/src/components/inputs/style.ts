import styled from 'styled-components/macro';
import { PlacementProps } from 'types';

export interface StyleProps {
	margin?: PlacementProps;
	width?: number | string;
}

interface StateProps {
	invalid?: boolean;
}

export const Container = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	margin-top: ${({ margin }) => (margin?.top ? `${margin.top}rem` : 0)};
	margin-bottom: ${({ margin }) => (margin?.bottom ? `${margin.bottom}rem` : 0)};
	margin-left: ${({ margin }) => (margin?.left ? `${margin.left}rem` : 0)};
	margin-right: ${({ margin }) => (margin?.right ? `${margin.right}rem` : 0)};
	position: relative;
	width: ${({ width }) =>
		width !== undefined ? (typeof width === 'string' ? width : `${width}rem`) : 'auto'};
`;

export const Input = styled.input<StateProps>`
	background-color: ${({ theme }) => theme.input.background};
	border: 0.1rem solid
		${({ theme, invalid }) => (invalid ? theme.input.invalid : theme.input.border)};
	border-radius: 0.8rem;
	color: ${({ theme }) => theme.input.color};
	min-height: 4rem;
	outline: none;
	padding-left: 2.4rem;
	padding-right: 2.4rem;
	width: 100%;
	transition: border-color 0.2s, color 0.2s;

	:disabled {
		color: ${({ theme }) => theme.input.disabled};
		border-color: ${({ theme }) => theme.input.disabled};

		::placeholder {
			color: ${({ theme }) => theme.input.disabled};
		}
	}

	:not(:disabled) {
		:focus,
		:hover {
			border-color: ${({ theme, invalid }) =>
				invalid ? theme.input.invalid : theme.input.focus};
		}
	}

	::placeholder {
		color: ${({ theme }) => theme.input.placeholder};
	}

	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const Label = styled.label`
	font-size: 1.4rem;
	align-self: flex-start;
	color: ${({ theme }) => theme.input.color};
	margin-bottom: 0.4rem;
	margin-left: 1rem;
	color: ${({ theme }) => theme.span};
`;

export const Error = styled.p`
	color: ${({ theme }) => theme.input.invalid};
	font-size: 1.6rem;
	margin-top: 0.8rem;
`;

export const Floating = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0.4rem;
	height: 100%;
	width: 4rem;
`;

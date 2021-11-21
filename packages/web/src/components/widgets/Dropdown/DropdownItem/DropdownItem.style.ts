import styled, { css } from 'styled-components/macro';

interface Props {
	danger: boolean;
	disabled: boolean;
	interactive: boolean;
	selected: boolean;
}

export const Option = styled.div<Props>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4.8rem;
	width: 100%;
	padding: 0 1.6rem;
	background-color: ${({ danger, theme }) =>
		danger ? theme.dropdown.danger.background : theme.dropdown.normal.open};
	outline: none;
	color: ${({ danger, theme }) =>
		danger ? theme.dropdown.danger.color : theme.dropdown.normal.color};
	font-family: 'Open Sans', sans-serif;
	font-size: 1.6rem;
	font-weight: ${({ selected }) => selected && 600};
	line-height: 2rem;
	transition: background-color 0.1s, color 0.1s;

	span {
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
		transition: color 0.1s;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	${({ danger, disabled, interactive }) =>
		interactive &&
		!disabled &&
		css`
			:focus,
			:hover {
				background-color: ${({ theme }) =>
					danger
						? theme.dropdown.danger.hover.background
						: theme.dropdown.normal.hover.background};
				color: ${({ theme }) =>
					danger ? theme.dropdown.danger.hover.color : theme.dropdown.normal.hover.color};
				cursor: pointer;
			}
		`}
`;

import { Layers } from 'environment';
import styled from 'styled-components/macro';

interface Props {
	bounds?: ClientRect;
	width?: number | string;
}

export const Menu = styled.div<Props>`
	background-color: ${({ theme }) => theme.dropdown.normal.open.background};
	box-shadow: ${({ theme }) => theme.dropdown.shadow};
	max-height: 28.8rem;
	overflow-x: hidden;
	padding: 0.4rem 0;
	position: absolute;
	width: ${({ width }) =>
		width !== undefined ? (typeof width === 'string' ? width : `${width}rem`) : 'auto'};
	z-index: ${Layers.floater};

	.horizontal-track {
		display: none;
	}
`;

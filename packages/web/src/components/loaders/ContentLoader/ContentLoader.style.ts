import styled from 'styled-components/macro';
import { Colors, Layers } from 'environment';

interface StyleProps {
	$loading: boolean;
}

export const Container = styled.div`
	background-color: ${Colors.transparent};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: ${Layers.loader};
`;

export const Content = styled.div<StyleProps>`
	display: flex;
	opacity: ${({ $loading }) => ($loading ? 0 : 1)};
	flex: 1;
	flex-direction: column;
	align-items: center;
	transition: opacity 0.3s;
	width: 100%;
`;

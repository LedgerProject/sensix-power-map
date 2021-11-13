import styled from 'styled-components';
import { animated } from 'react-spring';

import { Layers } from 'environment';
import { Icon } from 'components/icons';
import { Typography } from 'components/displayers/Typography';

interface MarginProps {
	margin?: string;
}

interface ContainerProps {
	badgeColor?: string;
}

interface FlexProps {
	justifyContent?: string;
	alignItems?: string;
	flex?: string;
}

export const Column = styled.div<MarginProps>`
	white-space: nowrap;
	flex: 0.25;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: ${({ margin }) => margin};

	p,
	h6 {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

export const Container = styled(animated.div)<MarginProps & ContainerProps>`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 4rem;
	top: 10rem;
	bottom: min(30%, 200px);
	width: 48.8rem;
	z-index: ${Layers.overlay};
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.overlay.shadow};
	background: ${({
		theme,
		color
	}) => `linear-gradient(to top left, transparent 50%, ${color} 0) top
      left/40px 40px no-repeat,
    ${theme.overlay.background};`};
	color: white;
	border-radius: 1.2rem;
	overflow: hidden;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Content = styled.div`
	border-radius: 1rem;
	position: relative;
	background: inherit;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	width: 100%;
	height: 100%;
	border-radius: 1rem;
	padding: 4rem;

	::-webkit-scrollbar {
		display: none;
	}
	li:last-of-type {
		margin-bottom: 1.6rem;
	}
`;

export const CloseButton = styled(Icon)`
	position: absolute;
	top: 2rem;
	right: 2rem;

	&:hover {
		cursor: pointer;
	}
`;

export const ChartsWrapper = styled.div`
	min-height: 24rem;
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div<FlexProps & MarginProps>`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
	margin: ${({ margin }) => margin || undefined};
`;

export const ChartRow = styled(Row)`
	flex: 1;
	min-height: 5rem;
	display: flex;
	justify-content: flex-end;
	margin: ${({ margin }) => margin};
`;

export const H6 = styled(Typography.H6)<MarginProps>`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.p};
	margin: ${({ margin }) => margin};
`;

export const H7 = styled(Typography.H6)<MarginProps>`
	font-size: 1.6rem;
	color: ${({ theme }) => theme.p};
	margin: ${({ margin }) => margin};
`;

export const P = styled(Typography.P)`
	font-size: 1.6rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.overlay.p};
`;

export const BreakLine = styled.div`
	width: 100%;
	height: 0.2rem;
	min-height: 0.2rem;
	margin: 0.8rem 0;
	background-color: ${({ theme }) => theme.breakline};
`;

export const ListItem = styled.li`
	margin-bottom: 0.4rem;
	::marker {
		font-size: 1.2rem;
		color: inherit;
	}
`;

export const Span = styled(Typography.Span)`
	font-size: 1.2rem;
	line-height: 1.6rem;
	margin-bottom: 0.8rem;
	color: ${({ theme }) => theme.p};
	position: relative;
	left: -0.4rem;
`;

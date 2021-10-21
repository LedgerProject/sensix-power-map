import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'components/Icons/close.svg';
import { Typography } from 'components/Typography';
import { animated } from 'react-spring';

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
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: ${({ margin }) => margin};
`;

export const Container = styled(animated.div)<MarginProps & ContainerProps>`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 4rem;
	top: 10rem;
	bottom: max(15%, 10rem);
	width: 48.8rem;
	z-index: 999999;
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.overlay.shadow};
	background: ${({
		theme,
		color
	}) => `linear-gradient(to top left, transparent 50%, ${color} 0) top
      left/40px 40px no-repeat,
    ${theme.overlay.background};`};
	color: white;
	border-radius: 12px;
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
`;

export const CloseButton = styled(CloseIcon)`
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
`;

export const BreakLine = styled.div`
	width: 100%;
	height: 0.2rem;
	min-height: 0.2rem;
	margin: 1.6rem 0;
	background-color: ${({ theme }) => theme.breakline};
`;

export const Span = styled(Typography.Span)`
	font-size: 1.2rem;
	line-height: 1.6rem;
	margin-bottom: 2.4rem;
	color: ${({ theme }) => theme.p};
`;

export const Button = styled.button`
	width: 20rem;
	margin-top: auto;
	margin-left: auto;
	padding: 1.2rem 2.4rem;
	box-shadow: ${({ theme }) => theme.button.secondary.shadow};
	background-color: ${({ theme }) => theme.button.secondary.background};
	color: ${({ theme }) => theme.button.secondary.color};
	border-radius: 3rem;
	border: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 16px;
	line-height: 1.5;
`;

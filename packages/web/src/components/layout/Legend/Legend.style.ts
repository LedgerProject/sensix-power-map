import styled from 'styled-components';
import { Typography } from 'components/displayers/Typography';

export const Container = styled.div`
	position: fixed;
	bottom: 4rem;
	left: 4rem;
	min-width: 15rem;
	background-color: ${({ theme }) => theme.background};
	padding: 2rem;
	opacity: 0.8;
	z-index: 99999;
`;

export const Status = styled(Typography.Span)`
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: ${({ theme }) => theme.h4};
	font-weight: bold;
`;

export const Desc = styled(Typography.Span)`
	font-size: 1.2rem;
	line-height: 1.6rem;
`;

export const LegendItem = styled.div`
	width: 1.6rem;
	height: 1.6rem;
	margin-right: 1.6rem;
	background-color: ${({ color }) => color};
	border-radius: 0.4rem;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

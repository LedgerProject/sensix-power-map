import styled from 'styled-components';
import { Colors } from 'environment';
import { Icon } from 'components/icons';
import { Typography } from 'components/displayers';

interface LinkProps {
	margin?: string;
	active?: boolean;
}

export const H7 = styled(Typography.H6)`
	font-size: 1.4rem;
	margin-right: 7.2rem;
	margin-left: 0.8rem;
	color: ${({ theme }) => theme.h3};
`;

export const Title = styled(Typography.H6)`
	pointer-events: none;
`;

export const Container = styled.div`
	overflow-x: hidden;
	background: ${({ theme }) => theme.background};
	display: flex;
	align-items: center;
	width: 100%;
	height: 5.6rem;
	padding: 0 4rem;
	box-shadow: ${({ theme }) => theme.navbar.shadow};
	z-index: 99999;
	box-shadow: ${({ theme }) => theme.navbar.shadow};
`;

export const Link = styled.a<LinkProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) => theme.span};
	position: relative;
	width: 10.5rem;
	margin: ${({ margin }) => margin};

	:hover {
		color: ${({ theme }) => theme.link.hover};
	}
`;

export const Right = styled.div`
	height: 4rem;
	border-left: 1px solid ${Colors.bluishGrey};
	padding-left: 7.5rem;
	display: flex;
	align-items: center;
	svg {
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Logo = styled(Icon)`
	margin-right: 2.4rem;
	svg {
		width: 3.2rem;
		height: 3.2rem;
		path {
			fill: ${({ theme }) => theme.logo};
		}
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	:hover {
		cursor: pointer;
	}
`;

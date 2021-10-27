import styled from 'styled-components';
import { Colors } from 'environment';
import { Icon } from 'components/icons';
interface LinkProps {
	margin?: string;
	active?: boolean;
}

export const H7 = styled.h6`
	font-size: 1.4rem;
	margin-right: 7.2rem;
	margin-left: 0.8rem;
	color: ${({ theme }) => theme.h3};
`;

export const Container = styled.div`
	background: ${({ theme }) => theme.background};
	display: flex;
	align-items: center;
	width: 100%;
	height: 6rem;
	padding: 0 4rem;
	box-shadow: ${({ theme }) => theme.navbar.shadow};
	z-index: 99999;
	box-shadow: ${({ theme }) => theme.navbar.shadow};
`;

export const H5 = styled.h5`
	font-size: 2.4rem;
	color: ${({ theme }) => theme.h3};
	font-weight: 400;
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
`;

export const Right = styled.div`
	height: 4rem;
	border-left: 1px solid ${Colors.bluishGrey};
	margin-left: auto;
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
	path {
		fill: ${({ theme }) => theme.icon};
	}
`;

import styled from 'styled-components/macro';

interface Props {
	flex: React.CSSProperties['flex'];
	position: React.CSSProperties['position'];
}

export const Container = styled.div<Props>`
	display: flex;
	flex: ${({ flex }) => flex};
	flex-direction: column;
	position: ${({ position = 'relative' }) => position};
`;

export const Error = styled.p`
	color: ${({ theme }) => theme.input.invalid};
	font-size: 1.6rem;
	margin-top: 0.8rem;
`;

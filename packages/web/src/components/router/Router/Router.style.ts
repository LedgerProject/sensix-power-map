import styled from 'styled-components/macro';

export const Main = styled.main`
	background-color: ${({ theme }) => theme.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	min-height: 100vh;
`;

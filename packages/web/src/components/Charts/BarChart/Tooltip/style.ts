import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-radius: 0.4rem;
`;

export const H7 = styled.h6`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.h4};
`;

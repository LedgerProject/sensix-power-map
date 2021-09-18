import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.h3};
  border-radius: 0.4rem;
`;

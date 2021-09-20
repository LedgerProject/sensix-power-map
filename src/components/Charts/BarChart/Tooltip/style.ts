import styled from "styled-components";
import { Typography } from "components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.h3};
  border-radius: 0.4rem;
`;

export const H6 = styled(Typography.H6)`
  font-size: 1.4rem;
`;

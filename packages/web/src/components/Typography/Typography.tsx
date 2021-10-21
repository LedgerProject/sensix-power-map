import styled from "styled-components";

export const Typography = {
  H1: styled.h1`
    color: ${({ theme }) => theme.h1};
  `,
  H2: styled.h2`
    color: ${({ theme }) => theme.h2};
  `,
  H3: styled.h3`
    color: ${({ theme }) => theme.h3};
  `,
  H4: styled.h4`
    color: ${({ theme }) => theme.h4};
  `,
  H5: styled.h5`
    color: ${({ theme }) => theme.h5};
  `,
  H6: styled.h6`
    color: ${({ theme }) => theme.h6};
  `,
  Span: styled.span`
    color: ${({ theme }) => theme.span};
  `,
  P: styled.p`
    color: ${({ theme }) => theme.p};
  `,
};

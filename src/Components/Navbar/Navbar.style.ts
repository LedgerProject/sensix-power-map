import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 0 4rem;
  box-shadow: 0px 5px 20px 5px rgb(182 235 255 / 40%);
  z-index: 99999;
`;

export const Spacer = styled.div`
  height: 4rem;
  width: 0.1rem;
  background-color: #d8d8d8;
  border-radius: 0.5px;
  margin: 0 3rem;
`;

export const H5 = styled.h5`
  font-size: 2.4rem;
`;

export const H7 = styled.h6`
  font-size: 1.4rem;
  margin-right: 7.3rem;
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

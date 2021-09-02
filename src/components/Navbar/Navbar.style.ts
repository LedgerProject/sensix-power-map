import styled from "styled-components";
import { Colors } from "environment";

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
  color: #7e8d90;
  font-weight: 400;
`;

export const Link = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 7.3rem;
  color: ${({ theme }) => theme.p};
  position: relative;

  &:after {
    position: absolute;
    height: 2px;
    width: 100%;
    color: ${Colors.green};
  }
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

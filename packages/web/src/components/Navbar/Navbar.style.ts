import styled from "styled-components";
import { Colors } from "environment";
import { ReactComponent as LogoIcon } from "../Icons/logo.svg";

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
  height: 6rem;
  padding: 0 4rem;
  box-shadow: ${({ theme }) => theme.navbar.shadow};
  z-index: 99999;
  box-shadow: ${({ theme }) => theme.navbar.shadow};
`;

export const Spacer = styled.div`
  height: 4rem;
  width: 0.1rem;
  background-color: ${Colors.bluishGrey};
  border-radius: 0.5px;
  margin: 0 3rem;
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
  color: ${({ theme }) => theme.p};
  position: relative;
  width: 10.5rem;
  margin: ${({ margin }) => margin};

  ::before {
    content: ${({ active }) => (active ? "''" : null)};
    position: absolute;
    height: 0.4rem;
    width: 100%;
    background-color: ${Colors.green};
    bottom: 0px;
    border-radius: 0.2rem;
  }
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  height: 100%;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Logo = styled(LogoIcon)`
  path {
    fill: ${({ theme }) => theme.icon};
  }
`;

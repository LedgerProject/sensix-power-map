import styled from "styled-components";
import { ReactComponent as CloseIcon } from "components/Icons/close.svg";
import { Typography } from "components/Typography";

interface MarginProps {
  margin?: string;
}

interface ContainerProps {
  badgeColor?: string;
}

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
  flex?: string;
}

export const Column = styled.div<MarginProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: ${({ margin }) => margin};
`;

export const Container = styled.div<MarginProps & ContainerProps>`
  background: ${({ theme }) => theme.overlay.background};
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4rem;
  top: 10rem;
  bottom: max(15%, 10rem);
  width: 48.8rem;
  z-index: 999999;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.overlay.shadow};

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3rem 3rem 0 0;
    border-color: ${({ color }) => color} transparent transparent transparent;
    top: 0;
    left: 0;
    position: absolute;
  }
`;

export const Content = styled.div`
  position: relative;
  background: inherit;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 4rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ChartsWrapper = styled.div`
  min-height: 24rem;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div<FlexProps & MarginProps>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin: ${({ margin }) => margin || undefined};
`;

export const ChartRow = styled(Row)`
  flex: 1;
  min-height: 5rem;
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin};
`;

export const H6 = styled(Typography.H6)<MarginProps>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.p};
  margin: ${({ margin }) => margin};
`;

export const H7 = styled(Typography.H6)<MarginProps>`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.p};
  margin: ${({ margin }) => margin};
`;

export const P = styled(Typography.P)`
  font-size: 1.6rem;
  line-height: 1.5rem;
`;

export const BreakLine = styled.div`
  width: 100%;
  height: 0.2rem;
  min-height: 0.2rem;
  margin: 1.6rem 0;
  background-color: ${({ theme }) => theme.breakline};
`;

export const Span = styled(Typography.Span)`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.p};
`;

export const Button = styled.button`
  width: 20rem;
  margin-top: auto;
  margin-left: auto;
  padding: 1.2rem 2.4rem;
  box-shadow: ${({ theme }) => theme.button.secondary.shadow};
  background-color: ${({ theme }) => theme.button.secondary.background};
  color: ${({ theme }) => theme.button.secondary.color};
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;

import styled from "styled-components";
import { ReactComponent as CloseIcon } from "components/Icons/close.svg";
import { Typography } from "components/Typography";

interface MarginProps {
  margin?: string;
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

export const Container = styled.div<MarginProps>`
  background: ${({ theme }) => theme.overlay.background};
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4rem;
  top: 10%;
  bottom: 15%;
  width: 48.8rem;
  z-index: 999999;
  padding: 40px;
  border-radius: 1rem;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.overlay.shadow};

  &::-webkit-scrollbar {
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

export const H7 = styled(Typography.H6)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.p};
`;

export const P = styled(Typography.P)`
  font-size: 1.6rem;
  line-height: 1.5rem;
`;

export const BreakLine = styled.div`
  width: 100%;
  height: 0.2rem;
  min-height: 0.2rem;
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
`;

export const H4 = styled(Typography.H4)`
  font-size: 2.4rem;
`;

export const Span = styled(Typography.Span)`
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.p};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.link} !important; //leaflet overrides this
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
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

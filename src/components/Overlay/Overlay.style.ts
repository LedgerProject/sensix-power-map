import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../Icons/close.svg";

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
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4rem;
  top: 10%;
  bottom: 15%;
  width: 48.8rem;
  background: white;
  z-index: 999999;
  padding: 40px;
  border-radius: 1rem;
  overflow-y: auto;
  box-shadow: 0 4px 16px 0 rgba(126, 141, 144, 0.3);

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

export const H6 = styled.h6<MarginProps>`
  font-size: 1.8rem;
  color: #243746;
  margin: ${({ margin }) => margin};
`;

export const H7 = styled.h6`
  font-size: 1.6rem;
  color: #243746;
`;

export const P = styled.p`
  color: #243746;
  font-size: 1.6rem;
  line-height: 1.5rem;
`;

export const BreakLine = styled.div`
  width: 100%;
  height: 0.2rem;
  min-height: 0.2rem;
  background: #e8efec;
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
`;

export const H4 = styled.h4`
  color: #243746;
  font-size: 2.4rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #243746;
  margin-bottom: 2.4rem;
`;

export const Link = styled.a`
  color: #00ce7c !important; //leaflet overrides this
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 20rem;
  margin-top: auto;
  margin-left: auto;
  padding: 1.2rem 2.4rem;
  box-shadow: 0 5px 20px 0 rgba(36, 55, 70, 0.1);
  background-color: #fff;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;

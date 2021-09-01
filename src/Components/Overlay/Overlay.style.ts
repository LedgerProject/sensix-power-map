import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../Icons/close.svg";

interface ContainerProps {
  margin?: string;
}

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  transform: opacity 0.3s ease-in;
  flex-direction: column;
  position: fixed;
  right: 4rem;
  top: 15%;
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

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export const Row = styled.div<FlexProps & ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  margin: ${({ margin }) => margin || undefined};
`;

export const H6 = styled.h6`
  font-size: 1.8rem;
  color: #243746;
`;

export const H7 = styled.h6`
  font-size: 1.6rem;
  color: #243746;
`;

export const ChartsDummy = styled.div`
  height: 28rem;
  min-height: 28rem;
  width: 100%;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  color: #243746;
  font-size: 1.6rem;
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
`;

import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../Icons/close.svg";

interface ContainerProps {
  hidden?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  position: fixed;
  right: 4rem;
  top: 20%;
  bottom: 20%;
  width: 48.8rem;
  background: white;
  z-index: 999999;
  padding: 0 20px 40px 0;
  border-radius: 1rem;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

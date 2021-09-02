import styled from "styled-components";

export const TrendContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 20%;
  bottom: 0;
`;

export const BarContainer = styled.div`
  position: absolute;
  top: 0;
  left: -2rem; // nivo doesn't support specific left/right padding for components, this will do;
  right: -2rem; // nivo doesn't support specific left/right padding for components, this will do;
  bottom: 0;
`;

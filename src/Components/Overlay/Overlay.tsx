import React, { SetStateAction } from "react";
import { ICell } from "src/types";

import {
  Container,
  CloseButton,
  H6,
  ChartsDummy,
  P,
  H7,
  Row,
  BreakLine,
  H4,
  Span,
  Link,
  Button,
} from "./Overlay.style";
import { TrendChart } from "../TrendChart/TrendChart";

interface Props {
  setCell: React.Dispatch<SetStateAction<ICell | undefined>>;
  hidden?: boolean;
  cell?: ICell;
}

const chartData = [
  [
    { x: 0, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
  ],
];

export function Overlay({ hidden, cell, setCell }: Props) {
  return (
    <Container hidden={hidden}>
      {/** absolutely pos */}
      <CloseButton onClick={() => setCell(undefined)} />
      <H6>Harmonic Distortions chart</H6>
      <ChartsDummy>
        <TrendChart color="#ff9700" data={chartData[0]} />
        <TrendChart color="#ff9700" data={chartData[1]} />
      </ChartsDummy>
      <Row>
        <P>Country</P>
        <H7>Romania</H7>
      </Row>
      <Row>
        <P>Area</P>
        <H7>Timis (county)</H7>
      </Row>
      <Row>
        <P>Total aggregated devices</P>
        <H7>118</H7>
      </Row>
      <Row>
        <P>Time interval</P>
        <H7>past 48h</H7>
      </Row>
      <BreakLine />
      <Row margin={"0 0 1.6rem 0"} justifyContent="flex-start">
        <H4>Medium Risk</H4>&nbsp;<H6>(Average quality)</H6>
      </Row>
      <Span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur
        sint occaecat cupidatat non proident.
      </Span>
      <Link href="#">Read more</Link>
      <Row margin="auto 0 0 0">
        <Button>SHARE</Button>
      </Row>
    </Container>
  );
}

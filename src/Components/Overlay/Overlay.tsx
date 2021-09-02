import React, { SetStateAction } from "react";
import { ICell } from "types";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  CloseButton,
  H6,
  ChartRow,
  P,
  H7,
  Row,
  BreakLine,
  H4,
  Span,
  Link,
  Button,
} from "./Overlay.style";
import { TrendChart } from "../Charts/TrendChart/TrendChart";
import { BarChart } from "../Charts/BarChart/BarChart";

import { chartData } from "./mock";

interface Props {
  setCell: React.Dispatch<SetStateAction<ICell | undefined>>;
  hidden?: boolean;
  cell?: ICell;
}

export function Overlay({ hidden = false, cell, setCell }: Props) {
  return (
    <CSSTransition
      className="fade-in"
      in={!hidden}
      timeout={350}
      classNames="fade-in"
    >
      {(state) => (
        <Container>
          {/** absolutely pos */}
          <CloseButton onClick={() => setCell(undefined)} />
          <H6>Harmonic Distortions chart</H6>
          <ChartRow flex="1">
            <TrendChart color="#ff9700" data={chartData.trend[0]} />
          </ChartRow>
          <ChartRow flex="1">
            <TrendChart color="#ff9700" data={chartData.trend[1]} />
          </ChartRow>
          <ChartRow style={{ flex: 2 }}>
            <BarChart colors={["#ff8e00", "#d8d8d8"]} data={chartData.bar} />
          </ChartRow>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit. Excepteur sint occaecat cupidatat non proident.
          </Span>
          <Link href="#">Read more</Link>
          <Row margin="auto 0 0 0">
            <Button>SHARE</Button>
          </Row>
        </Container>
      )}
    </CSSTransition>
  );
}

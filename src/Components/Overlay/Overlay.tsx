import React from "react";

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

interface Props {
  hidden?: boolean;
}

export function Overlay({ hidden }: Props) {
  return (
    <Container hidden={hidden}>
      {/** absolutely pos */}
      <CloseButton />
      <H6>Harmonic Distortions chart</H6>
      <ChartsDummy />
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
      <Row>
        <Button>SHARE</Button>
      </Row>
    </Container>
  );
}

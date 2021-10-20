import { Container, LegendItem, Status, Desc, Row } from "./Legend.style";

export function Legend() {
  return (
    <Container>
      <Row>
        <LegendItem color="#e84747" />
        <Status>Critical</Status>
        <Desc>&nbsp;(High Risk) / Poor Quality</Desc>
      </Row>
      <Row>
        <LegendItem color="#ffc629" />
        <Status>Warning</Status>
        <Desc>&nbsp;(Medium Risk) / Average quality</Desc>
      </Row>
      <Row>
        <LegendItem color="#00ce7c" />
        <Status>Optimal</Status>
        <Desc>&nbsp;(Low Risk) / Good quality</Desc>
      </Row>
      <Row>
        <LegendItem color="#d8d8d8" />
        <Status>No data</Status>
      </Row>
    </Container>
  );
}

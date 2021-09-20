import React from "react";
import { BarTooltipProps, BarDatum } from "@nivo/bar";
import { Container, H6 } from "./style";
import { Typography } from "components";

export function Tooltip(point: BarTooltipProps<BarDatum>) {
  console.log(point);
  return (
    <Container>
      <Typography.Span>{`Order ${point.index} ${point.id}`}</Typography.Span>
      <H6>{`${point.formattedValue}`}</H6>
    </Container>
  );
}

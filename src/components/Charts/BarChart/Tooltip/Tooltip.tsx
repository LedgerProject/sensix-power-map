import React from "react";
import { BarTooltipProps, BarDatum } from "@nivo/bar";
import { Container, H7 } from "./style";
import { Typography } from "components";

export function Tooltip(point: BarTooltipProps<BarDatum>) {
  return (
    <Container>
      <Typography.Span>{`Order ${point.index} ${point.id}`}</Typography.Span>
      <H7>{`${point.formattedValue}`}</H7>
    </Container>
  );
}

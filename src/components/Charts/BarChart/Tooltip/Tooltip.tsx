import React from "react";
import { BarTooltipProps, BarDatum } from "@nivo/bar";
import { Container } from "./style";
import { Typography } from "components";

export function Tooltip(point: BarTooltipProps<BarDatum>) {
  console.log(point);
  return (
    <Container>
      <Typography.H6>
        {point.data.y1} {point.data.y2}
      </Typography.H6>
    </Container>
  );
}

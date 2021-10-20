import { PointTooltipProps } from "@nivo/line";
import { Container, H7 } from "./style";
import { Typography } from "components";

export function Tooltip({ point }: PointTooltipProps) {
  return (
    <Container>
      <Typography.Span>{`${point.data.x}`}</Typography.Span>
      <H7>{`${point.data.yFormatted}%`}</H7>
    </Container>
  );
}

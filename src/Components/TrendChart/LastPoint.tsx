import { Point } from "@nivo/line";
import React from "react";
import styled from "styled-components/macro";

const Circle = styled.div<Point>`
  background-color: "white";
  border-radius: 50%;
  border: 0.4rem solid ${({ color }) => color};
  height: 100%;
  width: 100%;
`;

interface Props {
  points: Point[];
}

export function LastPoint({ points }: Props) {
  const shownPoints: { [serieId: string]: Point } = {};
  points.forEach((point) => (shownPoints[point.serieId] = point));

  return (
    <g>
      {Object.values(shownPoints).map((point) => (
        <foreignObject
          key={point.id}
          height="1.5rem"
          width="1.5rem"
          x={`calc(${point.x}px - 0.75rem)`}
          y={`calc(${point.y}px - 0.75rem)`}
        >
          <Circle {...point} />
        </foreignObject>
      ))}
    </g>
  );
}

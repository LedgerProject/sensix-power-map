import { Point } from "@nivo/line";
import { Colors } from "environment";
import React from "react";
import styled from "styled-components/macro";

const Circle = styled.div<Point>`
  background-color: ${({ theme }) => Colors.white};
  border-radius: 50%;
  border: ${({ color }) => `0.3rem solid ${color}`};
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
          height={"1rem"}
          width={"1rem"}
          x={`calc(${point.x}px - 0.5rem)`}
          y={`calc(${point.y}px - 0.5rem)`}
        >
          <Circle {...point} />
        </foreignObject>
      ))}
    </g>
  );
}

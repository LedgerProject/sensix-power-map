import React, { useState, useEffect } from "react";
import { Tooltip } from "./Tooltip";

import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { BarContainer } from "../style";

interface DataPoint {
  x: number;
  y1: number;
  y2: number;
}

interface Props {
  data: DataPoint[] | null;
  colors: string[];
}

export function BarChart({ data, colors }: Props) {
  const [series, setSeries] = useState<BarDatum[]>([]);

  useEffect(() => {
    if (data) {
      setSeries(
        data.map((d) => ({
          id: d.x,
          y1: d.y1,
          y1Color: colors[0],
          y2: d.y2,
          y2Color: colors[1],
        }))
      );
    }
  }, [data, colors]);

  return (
    <BarContainer>
      <ResponsiveBar
        animate={false}
        groupMode="grouped"
        data={series}
        indexBy="id"
        keys={["y1", "y2"]}
        enableGridY={false}
        //@ts-ignore
        colors={({ id, data }) => data[`${id}Color`]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
        }}
        margin={{ top: 5, bottom: 20 }}
        padding={0.5}
        innerPadding={2}
        axisLeft={null}
        axisTop={null}
        axisRight={null}
        labelSkipHeight={100}
        labelSkipWidth={100}
        legends={[]}
        borderColor={{ from: "color", modifiers: [["brighter", 0.5]] }}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        borderRadius={4}
        tooltip={(point) => <Tooltip {...point} />}
      />
    </BarContainer>
  );
}

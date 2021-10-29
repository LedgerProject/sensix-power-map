import React, { useState, useEffect } from "react";

import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { BarContainer } from "../style";
import { Tooltip } from "./Tooltip";

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
          THD: d.y1,
          THDColor: colors[0],
          THV: d.y2,
          THVColor: colors[1],
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
        keys={["THD", "THV"]}
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
        valueFormat={(d) => `${d}%`}
        tooltip={(point) => <Tooltip {...point} />}
      />
    </BarContainer>
  );
}

import React from "react";
import { Colors } from "environment";

import { useCell, useActiveCell, useStatusColors } from "hooks";
import { Rectangle, useMap } from "react-leaflet";

interface Props {
  id: number;
}

export function Cell({ id }: Props) {
  const mapStatusToColor = useStatusColors();

  const [, setActiveCell] = useActiveCell();
  const [cell] = useCell(id);

  const map = useMap();

  function onClickHandler() {
    if (cell) {
      setActiveCell(cell.id);
      map.setView(cell.coordinates);
    }
  }

  if (!cell) return null;

  return (
    <div style={{ zIndex: 99999999 }}>
      <Rectangle
        eventHandlers={{
          click: () => onClickHandler(),
        }}
        key={`${cell.coordinates.lat}-${cell.coordinates.lng}`}
        pathOptions={{
          fillColor: mapStatusToColor(cell.status) || Colors.alto,
          stroke: false,
          fill: true,
          fillOpacity: 0.7,
          interactive: true,
        }}
        bounds={[
          [cell.coordinates.lat, cell.coordinates.lng],
          [cell.coordinates.lat + 0.3, cell.coordinates.lng + 0.5],
        ]}
      />
    </div>
  );
}

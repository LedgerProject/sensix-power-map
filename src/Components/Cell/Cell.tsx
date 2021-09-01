import React, { useEffect, useRef } from "react";
import { Rectangle } from "react-leaflet";

interface ICell {
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface Props {
  cell: ICell;
}

export function Cell({ cell }: Props) {
  const thisRef = useRef<any | undefined>(undefined);

  console.log(thisRef);

  useEffect(() => {
    const onClick = function (e: React.MouseEvent): void {
      console.log(e, "asad");
    };

    thisRef.current.addEventListener("click", onClick);

    return thisRef.current.removeEventListener("click", onClick);
  });

  return (
    <Rectangle
      ref={thisRef}
      key={`${cell.coordinates.lat}-${cell.coordinates.lng}`}
      pathOptions={{
        fillColor: "red",
        stroke: false,
        fill: true,
        fillOpacity: 0.6,
        interactive: true,
      }}
      bounds={[
        [cell.coordinates.lat, cell.coordinates.lng],
        [cell.coordinates.lat + 0.3, cell.coordinates.lng + 0.5],
      ]}
    />
  );
}

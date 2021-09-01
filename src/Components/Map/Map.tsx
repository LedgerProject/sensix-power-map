import React, { SetStateAction } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngLiteral, LatLngBoundsLiteral } from "leaflet";
import { ICell } from "src/types";

import { Cell } from "../Cell/Cell";

const mockData = [
  { coordinates: { lat: 43, lng: 25 } },
  { coordinates: { lat: 44, lng: 25 } },
  { coordinates: { lat: 46, lng: 25 } },
  { coordinates: { lat: 45, lng: 27 } },
  { coordinates: { lat: 51, lng: 25 } },
  { coordinates: { lat: 42, lng: 24 } },
];

interface Props {
  setCell: React.Dispatch<SetStateAction<ICell | undefined>>;
}

export function Map({ setCell }: Props) {
  const center: LatLngLiteral = {
    lat: 46.6427,
    lng: 25.5887,
  };

  const bounds: LatLngBoundsLiteral = [
    [-90, -90],
    [90, 90],
  ];

  return (
    <MapContainer
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: "65px",
      }}
      center={center}
      zoom={8}
      maxZoom={18}
      bounds={bounds}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
      />
      {mockData.map((item) => (
        <Cell
          setCell={setCell}
          key={`${item.coordinates.lat}-${item.coordinates.lng}`}
          cell={item}
        />
      ))}
    </MapContainer>
  );
}

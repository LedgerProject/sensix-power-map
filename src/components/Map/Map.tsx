import React, { SetStateAction } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngLiteral, LatLngBoundsLiteral } from "leaflet";

import { ICell } from "types";

import { Cell } from "components";
import { useActiveTheme } from "hooks";

import { mockData } from "./mock";
interface Props {
  setCell: React.Dispatch<SetStateAction<ICell | undefined>>;
}

const center: LatLngLiteral = {
  lat: 46.6427,
  lng: 25.5887,
};

const bounds: LatLngBoundsLiteral = [
  [-90, -90],
  [90, 90],
];

export function Map({ setCell }: Props) {
  const [theme, _] = useActiveTheme();

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
      {theme === "light" ? (
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
        />
      ) : (
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      )}
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

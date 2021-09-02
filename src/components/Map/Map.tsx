import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngLiteral, LatLngBoundsLiteral } from "leaflet";

import { Cell } from "components";
import { useActiveTheme, useCells, useCellIds } from "hooks";

const center: LatLngLiteral = {
  lat: 46.6427,
  lng: 25.5887,
};

const bounds: LatLngBoundsLiteral = [
  [-90, -90],
  [90, 90],
];

export function Map() {
  const hasFetchedData = useRef<boolean>(false);

  const [, getCells] = useCells();
  const ids = useCellIds();

  const [theme] = useActiveTheme();

  useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      getCells();
    }
  }, [getCells]);

  return (
    <MapContainer
      key={`map-${theme}-theme`}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: "6rem",
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
      {/** Needs to be inside MapContainer !! */}
      {ids.map((id) => (
        <Cell id={id} key={`cell-${id}`} />
      ))}
    </MapContainer>
  );
}

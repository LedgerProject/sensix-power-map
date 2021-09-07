import { TileLayer as MapLayer, useMap } from "react-leaflet";
import { useActiveTheme, useZoom } from "hooks";

export function TileLayer() {
  const [, setZoom] = useZoom();

  const map = useMap();
  map.addEventListener("zoom", (e) => {
    setZoom(e.target._zoom);
  });

  const [theme] = useActiveTheme();
  if (theme === "light")
    return (
      <MapLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
      />
    );
  return (
    <MapLayer
      eventHandlers={{
        zoom: (e) => console.log(e),
      }}
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    />
  );
}

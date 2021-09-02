import { LatLngLiteral } from "leaflet";

export interface ICell {
  coordinates: LatLngLiteral;
  color?: string;
}

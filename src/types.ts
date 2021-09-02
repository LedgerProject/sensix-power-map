import { LatLngLiteral } from "leaflet";

export interface ICell {
  id: number;
  coordinates: LatLngLiteral;
  color?: string;
}

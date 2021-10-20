import { LatLngLiteral } from "leaflet";

export enum CellStatus {
  Critical = 0,
  Warning = 1,
  Optimal = 2,
  None = 3,
}

export interface ICell {
  id: number;
  coordinates: LatLngLiteral;
  status: CellStatus;
}

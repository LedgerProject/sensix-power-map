import { ICell } from "types";
import { Colors } from "environment";

export const mockData: ICell[] = [
  { coordinates: { lat: 43, lng: 25 }, color: Colors.paleRed },
  { coordinates: { lat: 44, lng: 25 }, color: Colors.paleRed },
  { coordinates: { lat: 46, lng: 25 }, color: Colors.paleRed },
  { coordinates: { lat: 45, lng: 27 }, color: Colors.paleRed },
  { coordinates: { lat: 45.5, lng: 25 }, color: Colors.paleRed },
  { coordinates: { lat: 42, lng: 24 }, color: Colors.paleRed },

  { coordinates: { lat: 40, lng: 33 }, color: Colors.sunglow },
  { coordinates: { lat: 46.3, lng: 25.5 }, color: Colors.sunglow },
  { coordinates: { lat: 44.4, lng: 25 }, color: Colors.sunglow },
  { coordinates: { lat: 44.4, lng: 27 }, color: Colors.sunglow },
  { coordinates: { lat: 44, lng: 24 }, color: Colors.sunglow },

  { coordinates: { lat: 43.3, lng: 25.5 }, color: Colors.green },
  { coordinates: { lat: 43.3, lng: 25 }, color: Colors.green },
  { coordinates: { lat: 34, lng: 25 }, color: Colors.green },
  { coordinates: { lat: 24, lng: 55 }, color: Colors.green },
  { coordinates: { lat: 21, lng: 67 }, color: Colors.green },
  { coordinates: { lat: 21, lng: 55 }, color: Colors.green },
  { coordinates: { lat: 12, lng: 34 }, color: Colors.green },
];

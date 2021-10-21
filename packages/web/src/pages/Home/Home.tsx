import React from "react";
import { Legend } from "components/Legend/Legend";
import { Map } from "components/Map/Map";
import { Overlay } from "components/Overlay/Overlay";

export function Home() {
  return (
    <div>
      <Map />
      <Overlay />
      <Legend />
    </div>
  );
}

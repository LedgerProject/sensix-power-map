import React from "react";
import { Map } from "src/Components/Map/Map";
import { Overlay } from "src/Components/Overlay/Overlay";

export function Home() {
  return (
    <div>
      <Map />
      <Overlay />
    </div>
  );
}

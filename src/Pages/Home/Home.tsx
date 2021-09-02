import React, { useState } from "react";
import { Legend } from "components/Legend/Legend";
import { Map } from "components/Map/Map";
import { Overlay } from "components/Overlay/Overlay";
import { ICell } from "types";

export function Home() {
  const [cell, setCell] = useState<ICell | undefined>(undefined);

  return (
    <div>
      <Map setCell={setCell} />
      <Overlay hidden={!cell} cell={cell} setCell={setCell} />
      <Legend />
    </div>
  );
}

import React, { useState } from "react";
import { Map } from "src/Components/Map/Map";
import { Overlay } from "src/Components/Overlay/Overlay";
import { ICell } from "src/types";

export function Home() {
  const [cell, setCell] = useState<ICell | undefined>(undefined);

  return (
    <div>
      <Map setCell={setCell} />
      <Overlay hidden={!cell} cell={cell} setCell={setCell} />
    </div>
  );
}

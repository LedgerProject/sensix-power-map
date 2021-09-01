import React from "react";

import { Container, CloseButton } from "./Overlay.style";

interface Props {
  hidden?: boolean;
}

export function Overlay({ hidden }: Props) {
  return (
    <Container hidden={hidden}>
      <CloseButton />
    </Container>
  );
}

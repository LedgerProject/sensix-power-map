import React from "react";

import { ReactComponent as PowerMonitorIcon } from "../Icons/powerMonitor.svg";
import { ReactComponent as LogoIcon } from "../Icons/logo.svg";
import { Container, Spacer, H5, Right, H7 } from "./Navbar.style";

export function Navbar() {
  return (
    <Container>
      <LogoIcon />
      <Spacer />
      <PowerMonitorIcon />
      <H5>PowerMap</H5>
      <Right>
        <H7>SHARE</H7>
        <H7>LOGIN</H7>
      </Right>
    </Container>
  );
}

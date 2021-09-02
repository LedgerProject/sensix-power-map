import React from "react";

import { ReactComponent as LogoIcon } from "../Icons/logo.svg";
import { Container, Spacer, H5, Right, Link } from "./Navbar.style";

export function Navbar() {
  return (
    <Container>
      <LogoIcon />
      <Spacer />
      <H5>PowerMap</H5>
      <Right>
        <Link href="#">SIGN UP</Link>
        <Link href="#">LOGIN</Link>
      </Right>
    </Container>
  );
}

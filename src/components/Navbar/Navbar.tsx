import React from "react";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

import { useActiveTheme } from "hooks";
import { Colors } from "environment";
import { Container, Spacer, H5, Right, Link, H7, Logo } from "./Navbar.style";

export function Navbar() {
  const [theme, toggleTheme] = useActiveTheme();

  return (
    <Container>
      <Logo fill="white" />
      <Spacer />
      <H5>PowerMap</H5>
      <Right>
        {theme === "light" ? (
          <>
            <FiMoon
              onClick={toggleTheme}
              size={22}
              stroke={Colors.bluishGrey}
            />
            <H7>DARK MODE</H7>
          </>
        ) : (
          <>
            <FiSun stroke={Colors.paleAqua} onClick={toggleTheme} size={22} />
            <H7>LIGHT MODE</H7>
          </>
        )}

        <Link margin="0 0 0 3rem" active href="#">
          SIGN UP
        </Link>
        <Link href="#">LOGIN</Link>
      </Right>
    </Container>
  );
}

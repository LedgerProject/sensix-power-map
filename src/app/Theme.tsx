import React from "react";
import { ThemeProvider } from "styled-components/macro";

import { GlobalStyle } from "environment/theme/globalStyle";
import { useSelector } from "hooks";
import { selectTheme } from "store/ui/theme";

interface Props {
  children: React.ReactNode;
}

export function Theme({ children }: Props) {
  const theme = useSelector((state) => selectTheme(state.ui.theme));

  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

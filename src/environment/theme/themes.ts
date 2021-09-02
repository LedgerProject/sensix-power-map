import { Colors } from "./colors";

const lightTheme = {
  h1: Colors.indigo,
  h2: Colors.indigo,
  h3: Colors.indigo,
  h4: Colors.indigo,
  h5: Colors.indigo,
  h6: Colors.indigo,
  p: Colors.indigo,
  a: Colors.green,
  icon: Colors.bluishGrey,
  span: Colors.bluishGrey,
  link: Colors.bluishGrey,
  background: Colors.ice,
  breakline: Colors.ice3,
  navbar: {
    shadow: "none",
  },
  badge: {
    background: Colors.paleRed200,
    color: Colors.white,
  },
  button: {
    primary: {
      background: Colors.green,
      color: Colors.white,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.green700,
    },
    secondary: {
      background: Colors.white,
      badge: Colors.green,
      color: Colors.indigo,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.mediumGray,
    },
    danger: {
      background: Colors.paleRed,
      color: Colors.white,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.paleRed200,
    },
    segment: {
      background: Colors.white,
      color: Colors.indigo,
      hover: Colors.ice,
      active: Colors.green,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
    },
    disabled: Colors.paleAqua,
  },
  overlay: {
    background: Colors.white,
    shadow: "0 4px 16px 0 rgba(126, 141, 144, 0.3)",
  },
};

const darkTheme: ThemeStyle = {
  h1: Colors.white,
  h2: Colors.white,
  h3: Colors.white,
  h4: Colors.white,
  h5: Colors.bluishGrey,
  h6: Colors.bluishGrey,
  p: Colors.white,
  a: Colors.green,
  link: Colors.paleAqua,
  icon: Colors.paleAqua,
  span: Colors.bluishGrey,
  background: Colors.indigo700,
  breakline: Colors.mediumGray,
  navbar: {
    shadow: "0 5px 10px 0 rgba(126, 141, 144, 0.1)",
  },
  badge: {
    background: Colors.paleRed200,
    color: Colors.white,
  },
  button: {
    primary: {
      background: Colors.green,
      color: Colors.white,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.green700,
    },
    secondary: {
      background: Colors.white,
      color: Colors.indigo,
      badge: Colors.green,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.lightGray,
    },
    danger: {
      background: Colors.paleRed,
      color: Colors.white,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
      hover: Colors.paleRed200,
    },
    segment: {
      background: Colors.indigo,
      color: Colors.white,
      hover: Colors.indigo700,
      active: Colors.green,
      shadow: "0 5px 20px 0 rgba(36, 55, 70, 0.1)",
    },
    disabled: Colors.alto,
  },
  overlay: {
    background: Colors.paleGrey,
    shadow: `0 10px 20px 0 ${Colors.dark}`,
  },
};

export type ThemeStyle = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

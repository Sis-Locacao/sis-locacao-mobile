import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors:{
    green:{
      700: "#16A085",
      600: "#1ABC9C",
      500: "#24D0AE"
    },

    white: "#ffffff",
    blue: "#34495E",

    gray:{
      700: "#B4BBBA",
      600: "#BDC3C7",
      500: "#A4ABB1"
    },

    red: "#E24444"
  },
  fonts: {
    heading: "Inter_400Regular",
    body: "Inter_700Bold",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 30,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});

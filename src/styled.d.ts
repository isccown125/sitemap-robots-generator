import "styled-components";
import { theme } from "./styles/theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
      primary: {
        main: string;
        hover: string;
        light: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      border: {
        primary: string;
        secondary: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    typography: {
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      default: string;
      slow: string;
      fast: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}

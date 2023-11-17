import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    colors: {
      background: string;
      backgroundLight: string;
      white: string;
      black: string;
      pink: string;
      yellow: string;
      blue: string;
      lightBlue: string;
      purple: string;
      lime: string;
      orange: string;
    };
  }
}

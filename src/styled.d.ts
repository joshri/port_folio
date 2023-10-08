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
      white: string;
      black: string;
      oneColor: string;
      blue: string;
      purple: string;
      lime: string;
      orange: string;
    };
  }
}

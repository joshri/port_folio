import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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

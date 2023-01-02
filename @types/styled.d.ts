import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      hue: number;
      firstColor: string;
      firstColorSecond: string;
      firstColorAlt: string;
      firstColorLighter: string;
      titleColor: string;
      textColor: string;
      textColorLight: string;
      inputColor: string;
      bodyColor: string;
      containerColor: string;
      scrollBarColor: string;
      scrollThumbColor: string;
    };
  }
}

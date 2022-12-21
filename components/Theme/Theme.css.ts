import { style } from "@vanilla-extract/css";

export const themeBtn = style({
  display: "none",
  "@media": {
    "screen and (min-width: 64rem)": {
      display: "block",
      border: "transparent",
      backgroundColor: "transparent",
      cursor: "pointer",
      padding: 0,
    },
  },
});

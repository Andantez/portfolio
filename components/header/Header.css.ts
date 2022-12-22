import { style } from "@vanilla-extract/css";
import { fs300, gap, textColor } from "../../styles/vars.css";

export const nav = style({
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  maxWidth: 1400,
  margin: "0 auto",
  "@media": {
    "screen and (min-width: 64rem)": {
      gap,
    },
  },
});

export const navList = style({
  marginLeft: "auto",
  color: textColor,
  "@media": {
    "screen and (min-width: 64rem)": {
      display: "flex",
      fontFamily: "var(--ff-text)",
      fontSize: fs300,
      gap,
    },
  },
});

export const navItem = style({
  selectors: {
    "&:not(:last-child)": {
      display: "none",
    },
  },
  "@media": {
    "screen and (min-width: 64rem)": {
      selectors: {
        "&:last-child": {
          display: "none",
        },
        "&:not(:last-child)": {
          display: "block",
        },
      },
    },
  },
});

export const menuBtn = style({
  backgroundColor: "transparent",
  border: "transparent",
});

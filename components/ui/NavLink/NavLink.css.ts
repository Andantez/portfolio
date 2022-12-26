import { style, styleVariants } from "@vanilla-extract/css";
import { textColor, fs300, fs400, fs700 } from "../../../styles/vars.css";

const baseStyle = style({
  textDecoration: "none",
  color: textColor,
  fontFamily: "var(--ff-text)",
});

export const navLink = styleVariants({
  sm: [baseStyle, { fontSize: fs300 }],
  md: [baseStyle, { fontSize: fs400 }],
  lg: [baseStyle, { fontSize: fs700 }],
});

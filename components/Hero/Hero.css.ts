import { style, globalStyle } from "@vanilla-extract/css";
import {
  gap,
  accentColour,
  fwBold,
  textColor,
  lightTextColour,
  fs800,
  fs600,
} from "../../styles/vars.css";

export const hero = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  padding: "0 1rem",
  gap,
  maxWidth: "1400px",
  margin: "0 auto",
  overflowX: "hidden",
});

export const section = style({
  position: "relative",
  fontFamily: "var(--ff-heading)",

  paddingLeft: "1rem",
});

export const header = style({
  color: textColor,

  fontSize: fs600,
});

export const name = style({
  color: accentColour,
});

export const title = style({
  position: "absolute",
  top: "-4.5rem",
  left: 0,
  fontSize: fs800,
  color: lightTextColour,
  zIndex: -1,
  lineHeight: 0.875,
  fontWeight: fwBold,
});
export const heroParagraph = style({
  fontFamily: "var(--ff-text)",
  paddingLeft: "2rem",
  color: textColor,
});

globalStyle(`${hero} a`, {
  maxWidth: "fit-content",
  marginLeft: "2rem",
  fontWeight: fwBold,
  textDecoration: "underline",
  textUnderlineOffset: 5,
});

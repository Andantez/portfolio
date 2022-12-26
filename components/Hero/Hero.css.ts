import { style, globalStyle } from "@vanilla-extract/css";
import {
  gap,
  fs500,
  accentColour,
  fwBold,
  textColor,
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
});

export const heroParagraph = style({
  fontFamily: "var(--ff-text)",
  paddingLeft: "1.5rem",
  color: textColor,
});

export const section = style({
  fontFamily: "var(--ff-heading)",
  fontSize: fs500,
});

export const name = style({
  color: accentColour,
});
export const header = style({
  color: textColor,
});
globalStyle(`${hero} a`, {
  maxWidth: "fit-content",
  marginLeft: "1.5rem",
  fontWeight: fwBold,
  textDecoration: "underline",
  textUnderlineOffset: 5,
});

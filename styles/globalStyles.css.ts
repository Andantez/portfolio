import { globalStyle } from "@vanilla-extract/css";
import {
  textColor,
  backgroundColor,
  accentColor,
  titleTextColor,
  placeholderTextColor,
  fwLight,
  fwRegular,
  fwBold,
  fs200,
  fs300,
  fs400,
  fs500,
  fs600,
  fs700,
  fs800,
  fs900,
  gap,
} from "./vars.css";

globalStyle(":root", {
  vars: {
    [textColor]: "#0D0D0D",
    [backgroundColor]: "#FFFFFF",
    [accentColor]: "#FF4250",
    [titleTextColor]: "#F8F8F8",
    [placeholderTextColor]: "#DBDBDB",
    [fwLight]: "300",
    [fwRegular]: "400",
    [fwBold]: "700",
    [fs200]: "0.875rem",
    [fs300]: "1rem",
    [fs400]: "1.125rem",
    [fs500]: "1.5rem",
    [fs600]: "2rem",
    [fs700]: "4rem",
    [fs800]: "8rem",
    [fs900]: "13rem",
    [gap]: "1.5em",
  },
});

globalStyle('body[data-theme="light"]', {
  vars: {
    [textColor]: '#0D0D0D',
    [backgroundColor]: '#FFFFFF',
    [titleTextColor]: '#F8F8F8',
  },
});

globalStyle('body[data-theme="dark"]', {
  vars: {
    [textColor]: '#FFFFFF',
    [backgroundColor]: '#0D0D0D',
    [titleTextColor]: '#363636',
  },
});

globalStyle("body", {
  backgroundColor,
});

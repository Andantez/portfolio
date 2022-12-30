import { globalStyle } from '@vanilla-extract/css';
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
  fs650,
  fs700,
  fs800,
  fs900,
  gap,
} from './vars.css';

globalStyle(':root', {
  vars: {
<<<<<<< HEAD
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
    [fs650]: "3rem",
    [fs700]: "4rem",
    [fs800]: "8rem",
    [fs900]: "13rem",
    [gap]: "1.5em",
=======
    [textColor]: '#0D0D0D',
    [backgroundColor]: '#FFFFFF',
    [accentColour]: '#FF4250',
    [lightTextColour]: '#F8F8F8',
    [darkTextColour]: '#363636',
    [placeholderTextColour]: '#DBDBDB',
    [fwLight]: '300',
    [fwRegular]: '400',
    [fwBold]: '700',
    [fs200]: '0.875rem',
    [fs300]: '1rem',
    [fs400]: '1.125rem',
    [fs500]: '1.5rem',
    [fs600]: '2rem',
    [fs700]: '4rem',
    [fs800]: '8rem',
    [fs900]: '13rem',
    [gap]: '1.5em',
>>>>>>> 40b5e37b7140c77e13fb957d8535f3fe22bbe962
  },
});

globalStyle('body[data-theme="light"]', {
  vars: {
<<<<<<< HEAD
    [textColor]: "#0D0D0D",
    [backgroundColor]: "#FFFFFF",
    [titleTextColor]: "#F8F8F8",
=======
    [textColor]: '#0D0D0D',
    [backgroundColor]: '#FFFFFF',
>>>>>>> 40b5e37b7140c77e13fb957d8535f3fe22bbe962
  },
});

globalStyle('body[data-theme="dark"]', {
  vars: {
<<<<<<< HEAD
    [textColor]: "#FFFFFF",
    [backgroundColor]: "#0D0D0D",
    [titleTextColor]: "#363636",
=======
    [textColor]: '#FFFFFF',
    [backgroundColor]: '#0D0D0D',
>>>>>>> 40b5e37b7140c77e13fb957d8535f3fe22bbe962
  },
});

globalStyle('body', {
  backgroundColor,
});

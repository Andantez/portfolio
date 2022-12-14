import { style } from '@vanilla-extract/css';

import {
  accentColor,
  fs800,
  fs900,
  titleTextColor,
  fwBold,
  textColor,
  fs650,
  fs600,
} from '../../styles/vars.css';

export const accent = style({
  color: accentColor,
});

export const pageTitle = style({
  position: 'absolute',
  top: '-4.5rem',
  left: 0,
  fontSize: fs800,
  color: titleTextColor,
  zIndex: -1,
  lineHeight: 0.875,
  fontWeight: fwBold,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      left: '-3rem',
    },
    'screen and (min-width: 64rem)': {
      fontSize: fs900,
      top: '-7.5rem',
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: 325,
      top: '-13.3rem',
      left: '-5.5rem',
    },
  },
});

export const header = style({
  color: textColor,
  fontSize: fs600,
  '@media': {
    'screen and (min-width: 64rem)': {
      fontSize: fs650,
    },
    'screen and (min-width: 87.5rem)': {
      fontSize: fs650,
    },
  },
});

export const section = style({
  position: 'relative',
  fontFamily: 'var(--ff-heading)',
  paddingLeft: '1rem',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      paddingLeft: 0,
      gridColumn: '2/ span 10',
    },
  },
});

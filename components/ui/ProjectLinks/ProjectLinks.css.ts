import { style } from '@vanilla-extract/css';
import {
  fs300,
  fwBold,
  textColor,
  gap,
  backgroundColor,
} from '../../../styles/vars.css';

export const projectLinksWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap,
  '@media': {
    'screen and (min-width: 37.5rem)': {
      flexWrap: 'nowrap',
      // justifyContent: 'flex-start'
    },
    'screen and (min-width: 46.875rem)': {
      // justifyContent: 'center',
      margin: '0 8rem 0',
    },
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-start',
      margin: '0',
    },
  },
});

export const projectLink = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs300,
  color: backgroundColor,
  backgroundColor: textColor,
  textDecoration: 'none',
  padding: '.75rem',
  borderRadius: '.25rem',
  textAlign: 'center',
  width: '100%',
  '@media': {
    'screen and (min-width: 64rem)': {
      width: 'auto',
      padding: '0.5rem 2rem',
    },
  },
});

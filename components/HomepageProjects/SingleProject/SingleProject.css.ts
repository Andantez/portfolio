import { style } from '@vanilla-extract/css';

import {
  fs300,
  fs600,
  fwBold,
  fwLight,
  textColor,
  gap,
} from '../../../styles/vars.css';

export const projectInfo = style({
  display: 'grid',
  gap,
  padding: '0 1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      textAlign: 'center',
    },
    'screen and (min-width: 64rem)': {
      textAlign: 'left',
      padding: 0,
    },
  },
});
export const projectName = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs600,
  color: textColor,
});

export const projectDescription = style({
  fontFamily: 'var(--ff-text)',
  fontSize: fs300,
  fontWeight: fwLight,
  color: textColor,
});

export const projectStack = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 46.875rem)': {
      justifyContent: 'center',
    },
    'screen and (min-width: 64rem)': {
      justifyContent: 'flex-start',
    },
  },
});

export const projectImgWrapper = style({
  padding: '0 1rem',
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    //  TODO: change the background color based on the project 
    backgroundColor: 'blue',
    inset: '-1rem 0 1rem 0',
    zIndex: -1,
  },
  '@media': {
    'screen and (min-width: 56.25rem)': {
      padding: '0 2rem',
      '::before': {
        inset: '-2rem 0 2rem 0',
      },
    },
  },
});

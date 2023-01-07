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
  order: 2,
  display: 'grid',
  gap,
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
});

export const projectImgWrapper = style({
  order: 1,
});

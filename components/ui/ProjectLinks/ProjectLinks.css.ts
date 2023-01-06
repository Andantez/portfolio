import { style } from '@vanilla-extract/css';
import { fs300, fwBold, textColor, gap } from '../../../styles/vars.css';

export const projectLinksWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap,
});

export const projectLink = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs300,
  color: textColor,
});

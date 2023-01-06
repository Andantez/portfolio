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
  justifyContent: 'stretch',
  flexWrap: 'wrap',
  gap,
  // marginTop: '1.5rem',
});

export const projectLink = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwBold,
  fontSize: fs300,
  color: backgroundColor,
  backgroundColor: textColor,
  textDecoration: 'none',
  padding: '.75rem 0',
  borderRadius: '.25rem',
  textAlign: 'center',
  width: '100%',
});

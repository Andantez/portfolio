import { style } from '@vanilla-extract/css';
import { fs100, fwLight, textColor } from '../../../styles/vars.css';

export const stackWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gap: '.35rem',
});

export const stackName = style({
  fontFamily: 'var(--ff-text)',
  fontWeight: fwLight,
  fontSize: fs100,
  color: textColor,
});

import { style } from '@vanilla-extract/css';

export const stackWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gap: '.25rem',
  placeContent: 'center',
});

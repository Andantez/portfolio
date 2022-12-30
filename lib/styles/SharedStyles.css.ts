import { style, styleVariants } from '@vanilla-extract/css';
import { gap } from '../../styles/vars.css';

const gridGap = style({
  gap,
});

export const grid = style({
  display: 'grid',
  placeContent: 'center',
  height: '100%',
  padding: '0 1rem',
  gap,
  maxWidth: '1400px',
  overflowX: 'hidden',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 37.5rem)': {
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
  },
});

export const gridContainer = styleVariants({
  withoutGap: [grid],
  withGap: [gridGap, grid],
});

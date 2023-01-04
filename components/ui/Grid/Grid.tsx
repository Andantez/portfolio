import { gridContainer } from '../../../lib/styles/SharedStyles.css';

type GridTypes = {
  children: React.ReactNode;
  gap: Exclude<
    keyof typeof gridContainer,
    'atMediumSizeScreen' | 'atLargeSizeScreen'
  >;
  mediaBreakpoint: Exclude<
    keyof typeof gridContainer,
    'withGap' | 'withoutGap'
  >;
};
const Grid = ({ children, gap, mediaBreakpoint }: GridTypes) => {
  return (
    <div className={`${gridContainer[gap]} ${gridContainer[mediaBreakpoint]}`}>
      {children}
    </div>
  );
};

export default Grid;
